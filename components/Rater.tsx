"use client";

import React, { ReactElement } from "react";
import { tss } from "tss-react";
import ratingHandler from "../handlers/ratingHandler";

type Props = {
  rating?: number;
  setRating: React.Dispatch<React.SetStateAction<number>>;
};

export default function Rater({ rating = 0, setRating }: Props) {
  const { classes: s } = useStyles();

  const [stars, setStars] = React.useState<ReactElement[]>(
    ratingHandler(rating)
  );

  const clickHandler = (index: number) => {
    if (rating === index + 1) {
      const newRating = ratingHandler(index + 0.5);
      setRating(index + 0.5);
      setStars(newRating);
    } else {
      const newRating = ratingHandler(index + 1);
      setRating(index + 1);
      setStars(newRating);
    }
  };

  return (
    <div className={s.container}>
      {stars.map((star, index) => (
        <div key={index} onClick={() => clickHandler(index)}>
          {star}
        </div>
      ))}
    </div>
  );
}

const useStyles = tss.withParams().create(() => ({
  container: {
    display: "flex",
    gap: 15,
    alignItems: "center",
    cursor: "pointer",
    width: "100%",
    justifyContent: "center",
    "& div": {
      fontSize: 40,
    },
  },
}));
