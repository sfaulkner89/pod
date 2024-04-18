import mongoose, { Schema } from "mongoose";

const interactionSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    contentId: {
      type: Schema.Types.ObjectId,
      required: true,
      refPath: "contentType",
      index: true,
    },
    contentType: {
      type: String,
      required: true,
      enum: ["pod", "episode"],
    },
    rating: {
      type: Number,
      default: 0,
    },
    liked: {
      type: Boolean,
      default: false,
    },
    listened: {
      type: Boolean,
      default: false,
    },
    subscribed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const interaction =
  mongoose.models.Interaction ||
  mongoose.model("Interaction", interactionSchema);

export default interaction;
