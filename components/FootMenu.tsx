"use client";

import React, { useEffect } from "react";
import { tss } from "tss-react";
import PodButtons from "./PodButtons";
import Rater from "./Rater";
import { keyframes } from "@emotion/react";
import { Episode, Pod } from "../types/models";
import getRating from "../handlers/server/getRating";

type Props = {
  setFootMenu: (value: null) => void;
  setSelectedPod: React.Dispatch<React.SetStateAction<Pod | null>>;
  content: Pod | Episode;
};

export default function FootMenu({
  setFootMenu,
  content,
  setSelectedPod,
}: Props) {
  const isPod = "episodeCount" in content;
  const containerRef = React.useRef<HTMLDivElement>(null);
  const backgroundRef = React.useRef<HTMLDivElement>(null);
  const [rating, setRating] = React.useState(0);
  const [showDesc, setShowDesc] = React.useState(true);
  const [imageSrc, setImageSrc] = React.useState(content.image);

  useEffect(() => {
    const userRating = async () => {
      const userRating = await getRating(
        content._id!,
        isPod ? "pod" : "episode"
      );
      setRating(userRating);
    };
    userRating();
  }, []);

  useEffect(() => {
    const listener = (e: MouseEvent) => {
      if (
        containerRef.current &&
        backgroundRef.current &&
        !containerRef.current.contains(e.target as Node) &&
        backgroundRef.current.contains(e.target as Node)
      ) {
        setFootMenu(null);
      }
    };

    document.addEventListener("click", listener);
    return () => document.removeEventListener("click", listener);
  }, []);

  const handleImageError = () => {
    setImageSrc("/content.webp"); // Set fallback image when an error occurs
  };

  const { classes: s } = useStyles();
  return (
    <div className={s.background} ref={backgroundRef}>
      <div className={s.header}>
        <img
          src={content.image}
          alt={content.title}
          className={s.image}
          onError={handleImageError}
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
        <PodButtons sub share like size={30} />
        <p>Rating</p>
        <Rater setRating={setRating} rating={rating} />
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
        <button className={s.button} onClick={() => setFootMenu(null)}>
          Add to list
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

const useStyles = tss.create({
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
});
