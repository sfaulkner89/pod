"use client";

import React, { useEffect } from "react";
import { tss } from "tss-react";
import { Pod } from "../types/common";
import PodButtons from "./PodButtons";
import Rater from "./Rater";
import { keyframes } from "@emotion/react";

type Props = {
  setFootMenu: (value: null) => void;
  pod: Pod;
};

export default function FootMenu({ setFootMenu, pod }: Props) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const backgroundRef = React.useRef<HTMLDivElement>(null);

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

  const { classes: s } = useStyles();
  const [rating, setRating] = React.useState(pod.rating ?? 0);
  return (
    <div className={s.background} ref={backgroundRef}>
      <div className={s.header}>
        <img src={pod.image} alt={pod.title} className={s.image} />
        <p className={s.title}>{pod.title}</p>
        <p>{pod.episodeCount} episodes</p>
      </div>
      <div className={s.container} ref={containerRef}>
        <PodButtons sub share like size={30} />
        <p>Rating</p>
        <Rater setRating={setRating} rating={rating} />
        <button className={s.button} onClick={() => setFootMenu(null)}>
          Share
        </button>
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
