import { Episode } from "../../types/models";

export type rssObject = {
  title: string;
  description: string;
  summary: string;
  items: Episode[];
  image: {
    link: string;
  };
};

const cleanEpisodeKeysAndAddInfo = (rssObject: rssObject, podId: string) => {
  return rssObject.items.map((episode) => {
    episode.encoded = episode["content:encoded" as keyof Episode];
    episode.encodedSnippet = episode["content:encodedSnippet" as keyof Episode];
    episode.description = rssObject.description;
    episode.summary = rssObject.summary;
    episode.image = rssObject.image.link;
    episode.podId = podId;
    episode.id = episode.guid;
    episode.datePublished = episode["pubDate" as keyof Episode];
    return episode;
  });
};
export default cleanEpisodeKeysAndAddInfo;
