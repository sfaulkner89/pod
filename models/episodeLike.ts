import mongoose from "mongoose";

const episodeLikeSchema = new mongoose.Schema(
  {
    liked: {
      type: Boolean,
      default: false,
    },
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
  },
  {
    timestamps: true,
  }
);

const like =
  mongoose.models.EpisodeLike ||
  mongoose.model("EpisodeLike", episodeLikeSchema);

export default like;
