import mongoose from "mongoose";

const episodeSchema = new mongoose.Schema({
  id: Number,
  title: String,
  link: String,
  description: String,
  guid: String,
  datePublished: Number,
  datePublishedPretty: String,
  dateCrawled: Number,
  enclosureUrl: String,
  enclosureType: String,
  enclosureLength: Number,
  duration: Number,
  explicit: Number,
  episode: { type: String, default: null },
  episodeType: { type: String, default: null },
  season: Number,
  image: String,
  feedItunesId: Number,
  feedUrl: String,
  feedImage: String,
  feedId: Number,
  podcastGuid: String,
  feedLanguage: String,
  feedDead: Number,
  feedDuplicateOf: { type: String, default: null },
  chaptersUrl: { type: String, default: null },
  transcriptUrl: { type: String, default: null },
});

const episode =
  mongoose.models.Episode || mongoose.model("Episode", episodeSchema);

export default episode;
