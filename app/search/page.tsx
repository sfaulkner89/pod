"use client";
import { Input } from "@mui/material";
import React, { useEffect } from "react";
import podClient from "../../handlers/podcastFetch";
import PodDisplay from "../../components/PodDisplay";
import PodGrid from "../../components/PodGrid";
import { tss } from "tss-react";
import { Pod } from "../../types/common";
import FootMenu from "../../components/FootMenu";

let timeoutId: NodeJS.Timeout;

export default function Search() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [pods, setPods] = React.useState([]);
  const [footMenu, setFootMenu] = React.useState<Pod | null>(null);
  const { classes: s } = useStyles();

  useEffect(() => {
    if (searchTerm.length < 3) return;

    // Clear the timeout if it's already set.
    if (timeoutId) clearTimeout(timeoutId);

    // Set a timeout to run the search after a delay.
    timeoutId = setTimeout(async () => {
      const res = await fetch(`/api/search?q=${searchTerm}`);
      const data = await res?.json();
      if (!data) return;
      setPods(data.feeds);
    }, 500); // 500ms delay

    // Cleanup function to clear the timeout when the component unmounts.
    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  const changeHandler = async (e: any) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className={s.container}>
      <img src="/vault.webp" alt="vault" className={s.image} />
      <Input
        placeholder="Search"
        onChange={changeHandler}
        className={s.search}
      />
      <PodGrid pods={pods} footMenu={footMenu} setFootMenu={setFootMenu} />
      {footMenu && <FootMenu pod={footMenu} setFootMenu={setFootMenu} />}
    </div>
  );
}

const useStyles = tss.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    width: "100%",
    paddingTop: 20,
  },
  search: {
    width: "100%",
    maxWidth: 300,
    backgroundColor: "white",
    borderRadius: 5,
    padding: 5,
    fontSize: 20,
  },
  image: {
    width: "100%",
    maxWidth: 200,
    borderRadius: 10,
  },
});
