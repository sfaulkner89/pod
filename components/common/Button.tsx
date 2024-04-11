"use client";

import React from "react";
import { tss } from "tss-react";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

export default function Button({ children, onClick, type }: Props) {
  const { classes: s } = useStyles();
  return (
    <button onClick={onClick} className={s.container} type={type}>
      {children}
    </button>
  );
}

const useStyles = tss.create(() => ({
  container: {
    padding: "10px",
    backgroundColor: "#d5dde1",
    color: "black",
    borderRadius: "5px",
    cursor: "pointer",
    border: "none",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "#c5c5c5",
    },
  },
}));
