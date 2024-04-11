import mongoose from "mongoose";

const episodeLikeSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    episodeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Episode",
      required: true,
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

const like =
  mongoose.models.EpisodeLike ||
  mongoose.model("EpisodeLike", episodeLikeSchema);

export default like;
