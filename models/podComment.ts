import mongoose, { Schema } from "mongoose";

const podCommentSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    podId: {
      type: Schema.Types.ObjectId,
      ref: "Pod",
      required: true,
    },
    deleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const podComment =
  mongoose.models.PodComment || mongoose.model("PodComment", podCommentSchema);

export default podComment;
