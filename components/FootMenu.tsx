"use client";

import React, { MouseEventHandler, useEffect } from "react";
import { tss } from "tss-react";
import PodButtons from "./PodButtons";
import Rater from "./Rater";
import { keyframes } from "@emotion/react";
import { Episode, Pod } from "../types/models";
import Image from "next/image";
import getInteractionInfo from "../handlers/server/getInteractionInfo";
import interact from "../handlers/client/interact";
import { InteractionKeys } from "../types/common";

let timeoutId: NodeJS.Timeout;

type Props = {
  setFootMenu: (value: null) => void;
  setSelectedPod: React.Dispatch<React.SetStateAction<Pod | null>>;
  selectedPod: Pod | null;
  content: Pod | Episode;
};

export const initialInfo = {
  rating: 0,
  liked: false,
  listened: false,
  sub: false,
};

export default function FootMenu({
  setFootMenu,
  content,
  setSelectedPod,
  selectedPod,
}: Props) {
  const isPod = "episodeCount" in content;
  const containerRef = React.useRef<HTMLDivElement>(null);
  const backgroundRef = React.useRef<HTMLDivElement>(null);
  const [info, setInfo] = React.useState(initialInfo);
  const [showDesc, setShowDesc] = React.useState(true);
  const [imageSrc, setImageSrc] = React.useState(content.image);

  useEffect(() => {
    const userInfo = async () => {
      const userInfo = await getInteractionInfo(
        content._id!,
        isPod ? "pod" : "episode"
      );
      setInfo(userInfo ?? initialInfo);
    };
    userInfo();
  }, []);

  const outsideClick = (e: MouseEvent) =>
    containerRef.current &&
    backgroundRef.current &&
    !containerRef.current.contains(e.target as Node) &&
    backgroundRef.current.contains(e.target as Node);

  useEffect(() => {
    const listener = (e: MouseEvent) => {
      if (outsideClick(e)) {
        setFootMenu(null);
      }
    };

    document.addEventListener("click", listener);
    return () => document.removeEventListener("click", listener);
  }, []);

  const handleImageError = () => {
    setImageSrc(selectedPod?.image ?? "/pod.webp"); // Set fallback image when an error occurs
  };

  const interactionHandler = async (
    key: InteractionKeys,
    value: number | boolean
  ) => {
    setInfo((prev) => ({ ...prev, [key]: value }));
    if (timeoutId) clearTimeout(timeoutId);

    timeoutId = setTimeout(
      async () =>
        interact(isPod ? "pod" : "episode", content._id, {
          ...info,
          [key]: value,
        }),
      500
    );
  };

  const { classes: s } = useStyles({ liked: info.liked });
  return (
    <div className={s.background} ref={backgroundRef}>
      <div className={s.header}>
        <Image
          src={imageSrc!}
          alt={content.title!}
          className={s.image}
          onError={handleImageError}
          width={200}
          height={200}
        />
        <p className={s.title}>{content.title}</p>
        {showDesc ? (
          <p className={s.description}>{content.description}</p>
        ) : (
          <p className={s.descTease} onClick={() => setShowDesc(true)}>
            description
          </p>
        )}
        {isPod && (
          <p className={s.episodeCount}>{content.episodeCount} episodes</p>
        )}
      </div>
      <div className={s.container} ref={containerRef}>
        <PodButtons
          sub
          share
          listened
          size={30}
          onClick={async (key: any, value: boolean) =>
            await interactionHandler(key, value)
          }
          initial={info ?? initialInfo}
        />
        <p>Rating</p>
        <Rater
          setRating={async (r: number) => await interactionHandler("rating", r)}
          rating={info.rating}
        />
        {isPod && (
          <button
            className={s.button}
            onClick={() => {
              setSelectedPod(content);
              setFootMenu(null);
            }}
          >
            Search Episodes
          </button>
        )}
        <button
          className={s.likeButton}
          onClick={async () => await interactionHandler("liked", !info.liked)}
        >
          Like
        </button>
        <button className={s.button} onClick={() => setFootMenu(null)}>
          Done
        </button>
      </div>
    </div>
  );
}

const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

const useStyles = tss.withParams<{ liked: boolean }>().create(({ liked }) => ({
  background: {
    position: "fixed",
    display: "flex",
    gap: 15,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backdropFilter: "blur(100px)",
    zIndex: 100,
    opacity: 1,
    transition: "backdrop-filter 2s, opacity 1.5s",
  },
  container: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > div:not(:last-child)": {
      paddingBottom: 10,

      // Select all direct child divs except the last one
      borderBottom: "1px solid rgb(8,13,20)", // Add a border to the bottom of each selected div
      width: "100%",
    },
    "& > div: not(:first-child)": {
      paddingTop: 10,
    },

    "& > button": {
      paddingBottom: 10,

      borderBottom: "1px solid rgb(8,13,20)",
      width: "100%",
    },
    gap: 10,
    width: "95%",
    paddingTop: 20,
    backgroundColor: "rgb(40,40,40)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    animation: `${slideUp} 0.5s ease-in-out `,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: "5px",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    padding: 10,
    textAlign: "center",
  },
  descTease: {
    color: "blueviolet",
    cursor: "pointer",
    textDecoration: "underline",
  },
  description: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    marginBottom: 10,
    width: "90%",
    textAlign: "center",
  },
  episodeCount: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "transparent",
    border: "none",
    boxShadow: "none",
    color: "white",
    cursor: "pointer",
    fontSize: 30,
    paddingTop: 5,
    paddingBottom: 5,
  },
  likeButton: {
    backgroundColor: "transparent",
    border: "none",
    boxShadow: "none",
    color: liked ? "green" : "white",
    cursor: "pointer",
    fontSize: 30,
    paddingTop: 5,
    paddingBottom: 5,
  },
}));
