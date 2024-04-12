import episodeComment from "../../models/episodeComment";
import { Episode, Pod } from "../../types/models";
import searchString from "../tools/episodeSearchString";

const searchEpisodes = async (
  podId: string,
  rssUrl: string,
  searchTerm: string
) => {
  const res = await fetch(
    `/api/search?q=${searchTerm}&rssUrl=${rssUrl}&podId=${podId}`
  );
  if (!res) return;
  return await res?.json();
};

export default searchEpisodes;
