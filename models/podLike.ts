import mongoose from "mongoose";

const podLikeSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    podId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Pod",
    },
  },
  {
    timestamps: true,
  }
);

const like =
  mongoose.models.PodLike || mongoose.model("PodLike", podLikeSchema);

export default like;
