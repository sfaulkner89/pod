"use client";

import React from "react";
import { MdDynamicFeed } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

import { tss } from "tss-react";

interface Props {
  sub?: boolean;
  rate?: boolean;
  share?: boolean;
  like?: boolean;
  size?: number;
}

export default function PodButtons({
  sub,
  rate,
  share,
  like,
  size = 20,
}: Props) {
  const buttons = [];
  if (sub)
    buttons.push({
      name: "Subscribed",
      icon: <MdDynamicFeed size={size} />,
    });
  if (rate) buttons.push({ name: "Rate", icon: <FaRegStar size={size} /> });
  if (share) buttons.push({ name: "Share", icon: <FaShare size={size} /> });
  if (like) buttons.push({ name: "Like", icon: <CiHeart size={size} /> });

  const { classes: s } = useStyles({ size });
  return (
    <div className={s.container}>
      {buttons.map((button) => (
        <button key={button.name} className={s.button}>
          {button.icon}
          {button.name}
        </button>
      ))}
    </div>
  );
}

const useStyles = tss.withParams<{ size: number }>().create(({ size }) => ({
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    width: "100%",
  },
  button: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 5,
    height: "100%",
    gap: 5,
    width: "100%",
    fontSize: size / 2,
    // backgroundColor: "rgba(255, 255, 255, 0.5)",
    backgroundColor: "transparent",
    color: "white",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.7)",
      color: "black",
    },
    boxShadow: "none",
    border: "none",
  },
}));
