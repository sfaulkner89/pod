import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      unique: true,
      required: true,
    },
    displayName: {
      type: String,
    },
    authId: {
      type: String,
      required: true,
      index: true,
    },
    following: {
      type: [Schema.Types.ObjectId],
      ref: "User",
    },
    followers: {
      type: [Schema.Types.ObjectId],
      ref: "User",
    },
    recentlyViewedEpisodes: {
      type: [Schema.Types.ObjectId],
      ref: "Episode",
    },
    recentlyViewedPods: {
      type: [Schema.Types.ObjectId],
      ref: "Pod",
    },
  },
  {
    timestamps: true,
  }
);

const user = mongoose.models.User || mongoose.model("User", userSchema);

export default user;
