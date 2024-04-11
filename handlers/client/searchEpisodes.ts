import episodeComment from "../../models/episodeComment";
import { Episode } from "../../types/models";

const searchEpisodes = async (podId: number, searchTerm: string) => {
  const res = await fetch(`/api/search?q=${searchTerm}&podId=${podId}`);
  const data = await res?.json();
  if (!data) return;

  const searchString = (e: Episode) =>
    e.title?.toLowerCase() + " " + e.description?.toLowerCase();

  return data.filter((episode: Episode) => {
    return searchString(episode).includes(searchTerm.toLowerCase());
  });
};

export default searchEpisodes;
