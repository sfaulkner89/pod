"use client";

import React, { useState } from "react";
import { tss } from "tss-react";
import PodButtons from "./PodButtons";
import { Episode, Pod } from "../types/models";
import { format } from "date-fns";
import Image from "next/image";

interface Props {
  content: Pod | Episode;
  onClick: React.Dispatch<React.SetStateAction<Pod | Episode | null>>;
  selectedPod: Pod | null;
}

export default function PodDisplay({ content, onClick, selectedPod }: Props) {
  const isEpisode = !!selectedPod;
  const [hovered, setHovered] = useState(false);
  const [imageSrc, setImageSrc] = useState(content.image);
  const { classes: s } = useStyles({ hovered, isEpisode });

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    setImageSrc(selectedPod?.image ?? "/pod.webp"); // Set fallback image when an error occurs
  };

  const contextHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    onClick(content);
  };

  return (
    <div
      className={s.container}
      onMouseEnter={(e) => contextHandler(e)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={s.veil}>
        <div className={s.infoContainer}>
          <h4>{content.title}</h4>

          <p className={s.description}>{content.description}</p>

          {"episodeCount" in content && <p>Episodes: {content.episodeCount}</p>}
          {/* {"datePublished" in content && (
            <p>
              Date Published:{" "}
              {format(Number(content.datePublished), "dd mm yyyy")}
            </p>
          )} */}
          {"duration" in content && <p>Duration: {Number(content.duration)}</p>}
        </div>
        <div className={s.veilFooter}>
          <PodButtons sub rate share />
        </div>
      </div>
      {
        <Image
          src={imageSrc!}
          alt={content.title!}
          className={s.image}
          onError={handleImageError}
          width={200}
          height={200}
        />
      }
    </div>
  );
}

const useStyles = tss
  .withParams<{ hovered: boolean; isEpisode: boolean }>()
  .create(({ hovered, isEpisode }) => ({
    container: {
      width: "100%",
      minWidth: 100,
      height: 200,
      position: "relative",
      borderRadius: 10,
      overflow: "hidden",
    },
    veil: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      borderRadius: 10,
      display: hovered || isEpisode ? "block" : "none",
      transition: "display 0.5s",
      opacity: hovered ? 1 : isEpisode ? 0.8 : 0,
      zIndex: 1,
    },
    description: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      WebkitLineClamp: 3,
      WebkitBoxOrient: "vertical",
    },
    veilFooter: {
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
    },
    infoContainer: {
      position: "absolute",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      textAlign: "center",
      color: "white",
      width: "80%",
    },
    image: {
      width: "100%",
      height: "100%",
      fill: "contain",
      objectFit: "cover",
      borderRadius: 10,
      filter: hovered ? "blur(8px)" : "none", // Apply blur effect when hovered
      transition: "filter 0.3s", // Smooth transition
    },
  }));
