"use client";
import React, { useEffect } from "react";
import PodGrid from "../../components/PodGrid";
import FootMenu from "../../components/FootMenu";
import { tss } from "tss-react";
import Input from "../../components/common/input";
import Image from "next/image";
import logo from "@/public/vault.webp";
import { Episode, Pod } from "../../types/models";
import Title from "../../components/common/Title";
import searchEpisodes from "../../handlers/client/searchEpisodes";
import searchPods from "../../handlers/client/searchPods";
import { FaChevronLeft } from "react-icons/fa";

let timeoutId: NodeJS.Timeout;

export default function Search() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [pods, setPods] = React.useState([]);
  const [episodes, setEpisodes] = React.useState([]);
  const [footMenu, setFootMenu] = React.useState<Pod | Episode | null>(null);
  const [selectedPod, setSelectedPod] = React.useState<Pod | null>(null);
  const [podSearchTerm, setPodSearchTerm] = React.useState("");

  const { classes: s } = useStyles();

  useEffect(() => {
    if (searchTerm.length < 3) return;

    // Clear the timeout if it's already set.
    if (timeoutId) clearTimeout(timeoutId);

    // Set a timeout to run the search after a delay.
    timeoutId = setTimeout(async () => {
      if (selectedPod) {
        const data = await searchEpisodes(selectedPod.id!, searchTerm);
        setEpisodes(data);
        return;
      }
      const data = await searchPods(searchTerm);
      setPods(data);
      return;
    }, 500); // 500ms delay

    // Cleanup function to clear the timeout when the component unmounts.
    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  const changeHandler = async (e: any) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement?.blur();
    }
  }, [footMenu]);

  return (
    <div
      className={s.container}
      style={{ overflowY: footMenu ? "hidden" : "scroll" }}
    >
      {selectedPod && (
        <div className={s.backButton} onClick={() => setSelectedPod(null)}>
          <FaChevronLeft />
        </div>
      )}
      <Image
        src={logo}
        alt="vault"
        className={s.image}
        height={200}
        width={200}
      />
      {selectedPod && <Title>{selectedPod?.title}</Title>}
      <Input placeholder="Search" onChange={changeHandler} />
      <PodGrid
        pods={selectedPod ? episodes : pods}
        footMenu={footMenu}
        setFootMenu={setFootMenu}
      />
      {footMenu && (
        <FootMenu
          content={footMenu}
          setFootMenu={setFootMenu}
          setSelectedPod={setSelectedPod}
        />
      )}
    </div>
  );
}

const useStyles = tss.create(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    width: "100%",
    paddingTop: "20px",
  },

  image: {
    width: "100%",
    maxWidth: "200px",
    borderRadius: "10px",
  },
  backButton: {
    position: "fixed",
    top: "10px",
    left: "10px",
    cursor: "pointer",
    fontSize: "30px",
  },
}));
