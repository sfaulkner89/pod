"use client";

import React from "react";
import { tss } from "tss-react";
import { Episode, Pod } from "../types/models";
import PodDisplay from "./PodDisplay";

type Props = {
  pods: Pod[] | Episode[];
};

export default function ScrollDisplay({ pods }: Props) {
  const { classes: s } = useStyles();

  return (
    <div className={s.container}>
      {pods.map((content) => (
        <PodDisplay content={content} onClick={() => {}} key={content.id} />
      ))}
    </div>
  );
}

const useStyles = tss.withParams().create(() => ({
  container: {
    display: "grid",
    gridTemplateColumns: "minmax(min-content, max-content)",
    gridTemplateRows: "1fr",
    gridAutoFlow: "column",
    gap: 5,
    maxWidth: "none",
    justifyContent: "flex-start",
    padding: 10,
    overflowX: "scroll",
    scrollbarWidth: "none", // for Firefox
    "&::-webkit-scrollbar": {
      display: "none", // for Chrome, Safari, and Opera
    },
    // "@media (max-width: 768px)": {
    //   gridTemplateColumns: "1fr 1fr 1fr",
    // },
  },
}));
