"use server";

import user from "../../models/user";
import podRating from "../../models/podRating";
import episodeRating from "../../models/episodeRating";
import { createClient } from "../../utils/supabase/server";
import { connectDatabase } from "../../utils/db";
import mongoose, { ObjectId } from "mongoose";

const getRating = async (
  contentId: mongoose.Types.ObjectId,
  type: "pod" | "episode"
) => {
  console.log("contentId", contentId, "type", type);
  await connectDatabase();
  const supabase = createClient();
  const authId = (await supabase.auth.getUser()).data.user?.id;
  if (!authId) {
    return null;
  }
  const currentUser = await user.findOne({ authId: authId });

  const isPod = type === "pod";

  const rating = isPod
    ? await podRating.findOne({ podId: contentId, userId: currentUser._id })
    : await episodeRating.findOne({
        episodeId: contentId,
        userId: currentUser._id,
      });

  return rating;
};

export default getRating;
