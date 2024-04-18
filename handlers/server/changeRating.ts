"use server";

import mongoose from "mongoose";
import config from "../../config/config";

const changeRating = async (
  contentId: mongoose.Types.ObjectId,
  type: "pod" | "episode",
  rating: number
) => {
  const res = await fetch(
    `${config.baseUrl}/api/rating?contentId=${contentId}&type=${type}&rating=${rating}`
  );
};

export default changeRating;
