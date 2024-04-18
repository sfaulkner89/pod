"use client";

import React from "react";
import { tss } from "tss-react";
import { Episode, Pod } from "../types/models";
import PodDisplay from "./PodDisplay";

type Props = {
  pods: Pod[] | Episode[];
  selectedPod: Pod | Episode | null;
  setSelectedPod: React.Dispatch<React.SetStateAction<Pod | Episode | null>>;
};

export default function ScrollDisplay({
  pods,
  selectedPod,
  setSelectedPod,
}: Props) {
  const { classes: s } = useStyles();

  return (
    <div className={s.container}>
      {pods.map((content) => (
        <PodDisplay
          content={content}
          onClick={setSelectedPod}
          key={content.id}
          selectedPod={selectedPod}
        />
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
