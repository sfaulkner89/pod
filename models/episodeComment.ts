import mongoose, { Schema } from "mongoose";

const episodeCommentSchema = new Schema(
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
    episodeId: {
      type: Schema.Types.ObjectId,
      ref: "Episode",
      required: true,
    },
    deleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const episodeComment =
  mongoose.models.EpisodeComment ||
  mongoose.model("EpisodeComment", episodeCommentSchema);

export default episodeComment;
