import mongoose from "mongoose";

const episodeRatingSchema = new mongoose.Schema(
  {
    rating: {
      type: Number,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    podId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Pod",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const episodeRating =
  mongoose.models.EpisodeRating ||
  mongoose.model("EpisodeRating", episodeRatingSchema);

export default episodeRating;
