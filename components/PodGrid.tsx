"use client";

import React from "react";
import { tss } from "tss-react";
import PodDisplay from "./PodDisplay";
import { Episode, Pod } from "../types/models";

interface Props {
  pods: Pod[] | Episode[];
  setFootMenu: React.Dispatch<React.SetStateAction<Pod | Episode | null>>;
  footMenu: Pod | Episode | null;
  selectedPod: Pod | null;
}

export default function PodGrid({
  pods,
  setFootMenu,
  footMenu,
  selectedPod,
}: Props) {
  const { classes: s } = useStyles();
  return (
    <div className={s.container}>
      {pods.map((content) => {
        return (
          <PodDisplay
            key={content._id.toString()}
            content={content}
            onClick={setFootMenu}
            selectedPod={selectedPod}
          />
        );
      })}
    </div>
  );
}

const useStyles = tss.create({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: 5,
    justifyContent: "center",
    width: "100%",
    padding: 10,
    "@media (max-width: 768px)": {
      gridTemplateColumns: "1fr 1fr 1fr",
    },
  },
});
