"use client";

import React from "react";
import { MdDynamicFeed } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoEarOutline } from "react-icons/io5";

import { tss } from "tss-react";
import { InteractionKeys } from "../types/common";

interface Props {
  sub?: boolean;
  rate?: boolean;
  share?: boolean;
  like?: boolean;
  size?: number;
  listened?: boolean;
  onClick: (key: InteractionKeys, value: boolean) => void;
  initial: { liked: boolean; listened: boolean; sub: boolean };
}

export default function PodButtons({
  sub,
  rate,
  share,
  like,
  size = 20,
  listened,
  initial,
  onClick,
}: Props) {
  const buttons = [];
  if (sub)
    buttons.push({
      name: "Subscribed",
      icon: <MdDynamicFeed size={size} />,
      pressed: initial?.sub,
    });
  if (rate)
    buttons.push({
      name: "Rate",
      icon: <FaRegStar size={size} />,
      onClick: () => {},
    });
  if (share)
    buttons.push({
      name: "Share",
      icon: <FaShare size={size} />,
      onClick: () => {},
    });
  if (like)
    buttons.push({
      name: "Like",
      icon: <CiHeart size={size} />,
      onClick: () => onClick("liked", !initial.liked),
      pressed: initial?.liked,
    });
  if (listened)
    buttons.push({
      name: "Listened",
      icon: <IoEarOutline size={size} />,
      onClick: () => onClick("listened", !initial.listened),
      pressed: initial?.listened,
    });

  const { classes: s } = useStyles({ size });
  return (
    <div className={s.container}>
      {buttons.map((button) => (
        <button
          key={button.name}
          className={button.pressed ? s.buttonClicked : s.button}
          onClick={button.onClick}
        >
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
      color: "green",
    },
    boxShadow: "none",
    border: "none",
  },
  buttonClicked: {
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
    color: "green",
    cursor: "pointer",
    "&:hover": {
      color: "white",
    },
    boxShadow: "none",
    border: "none",
  },
}));
