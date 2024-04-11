import mongoose from "mongoose";
import { type Pod } from "../types/common";

const podSchema = new mongoose.Schema<Pod>(
  {
    id: { type: Number, unique: true, index: true },
    title: String,
    description: String,
    url: String,
    originalUrl: String,
    link: String,
    image: String,
    feedUrl: String,
    inCrawlQueue: Number,
    inPollingQueue: Number,
    priority: Number,
    lastGoodHttpStatusTime: Number,
    lastHttpStatus: Number,
    contentType: String,
    itunesId: Number,
    generator: String,
    language: String,
    type: Number,
    dead: Number,
    crawlErrors: Number,
    parseErrors: Number,
    categories: [Object],
    locked: Number,
    explicit: Boolean,
    podcastGuid: String,
    medium: String,
    episodeCount: Number,
    imageUrlHash: Number,
    newestItemPubdate: Number,
    rating: { type: Number, default: null },
    timesSearched: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

const pod = mongoose.models.Pod || mongoose.model("Pod", podSchema);

export default pod;
