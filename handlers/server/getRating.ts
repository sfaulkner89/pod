"use server";

import user from "../../models/user";
import podRating from "../../models/podRating";
import episodeRating from "../../models/episodeRating";
import podLike from "../../models/podLike";
import episodeLike from "../../models/episodeLike";
import { createClient } from "../../utils/supabase/server";
import { connectDatabase } from "../../utils/db";
import mongoose from "mongoose";

const getContentInfo = async (
  contentId: mongoose.Types.ObjectId,
  type: "pod" | "episode"
) => {
  await connectDatabase();
  const supabase = createClient();
  const authId = (await supabase.auth.getUser()).data.user?.id;
  if (!authId) {
    return null;
  }
  const currentUser = await user.findOne({ authId: authId });

  const isPod = type === "pod";

  const rating =
    (isPod
      ? await podRating.findOne({ podId: contentId, userId: currentUser._id })
      : await episodeRating.findOne({
          episodeId: contentId,
          userId: currentUser._id,
        })
    )?.rating ?? 0;

  const liked =
    (isPod
      ? await podLike.findOne({
          podId: contentId,
          userId: currentUser._id,
        })
      : await episodeLike.findOne({
          episodeId: contentId,
          userId: currentUser._id,
        })
    )?.liked ?? false;

  return {
    rating: rating,
    liked: liked,
  };
};

export default getContentInfo;
