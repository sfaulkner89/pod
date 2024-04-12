"use server";

import mongoose, { ObjectId } from "mongoose";
import config from "../../config/config";

const toggleLike = async (
  contentId: mongoose.Types.ObjectId,
  type: "pod" | "episode"
) => {
  const res = await fetch(
    `${config.baseUrl}/api/like?contentId=${contentId}&type=${type}`
  );
  return res.json();
};

export default toggleLike;
