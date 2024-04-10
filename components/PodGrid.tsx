"use client";

import React from "react";
import { tss } from "tss-react";
import { Pod } from "../types/common";
import PodDisplay from "./PodDisplay";

interface Props {
  pods: Pod[];
  setFootMenu: React.Dispatch<React.SetStateAction<Pod | null>>;
  footMenu: Pod | null;
}

export default function PodGrid({ pods, setFootMenu, footMenu }: Props) {
  const { classes: s } = useStyles();
  return (
    <div className={s.container}>
      {pods.map((pod) => {
        return (
          <PodDisplay
            key={pod.id}
            pod={pod}
            setFootMenu={setFootMenu}
            footMenu={footMenu}
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
      gridTemplateColumns: "1fr 1fr",
    },
  },
});
