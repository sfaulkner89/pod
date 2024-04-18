import mongoose, { Schema } from "mongoose";

const EpisodeSchema: Schema = new Schema(
  {
    id: { type: String, required: true },
    podId: { type: Schema.Types.ObjectId, ref: "Podcast", required: true },
    title: { type: String },
    description: { type: String },
    summary: { type: String },
    image: { type: String },
    link: { type: String },
    datePublished: { type: String },
    encoded: { type: String },
    encodedSnippet: { type: String },
    enclosure: {
      url: { type: String },
      length: { type: String },
      type: { type: String },
    },
    content: { type: String },
    contentSnippet: { type: String },
    guid: { type: String, required: true },
    categories: { type: [String] },
    isoDate: { type: String },
    itunes: {
      author: { type: String },
      explicit: { type: String },
      duration: { type: String },
      image: { type: String },
      episode: { type: String },
      keywords: { type: String },
      episodeType: { type: String },
    },
    timesViewed: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

const episode =
  mongoose.models.Episode || mongoose.model("Episode", EpisodeSchema);

export default episode;
