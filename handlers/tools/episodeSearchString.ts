import { Episode } from "../../types/models";

const searchString = (e: Episode) =>
  (e.title?.toLowerCase() ?? "") +
  " " +
  (e.description?.toLowerCase() ?? "") +
  " " +
  (e.summary?.toLowerCase() ?? "") +
  " " +
  (e.categories ?? []).map((c) => c?.toLowerCase() ?? "").join(" ") +
  " " +
  (e.itunes?.keywords?.toLowerCase() ?? "") +
  " " +
  (e.itunes?.author?.toLowerCase() ?? "") +
  " " +
  (e.itunes?.episode?.toLowerCase() ?? "") +
  " " +
  (e.itunes?.episodeType?.toLowerCase() ?? "") +
  " " +
  (e.itunes?.explicit?.toLowerCase() ?? "") +
  " " +
  (e.itunes?.duration?.toLowerCase() ?? "") +
  " " +
  (e.itunes?.image?.toLowerCase() ?? "");

export default searchString;
