"use server";
import { createClient } from "../../utils/supabase/server";
import { connectDatabase } from "../../utils/db";
import mongoose from "mongoose";
import { getUserFromServerSession } from "./getUser";
import interaction from "../../models/interaction";

const getInteractionInfo = async (
  contentId: mongoose.Types.ObjectId,
  type: "pod" | "episode"
) => {
  await connectDatabase();
  const supabase = createClient();
  const authId = (await supabase.auth.getUser()).data.user?.id;
  if (!authId) {
    return null;
  }
  const user = await getUserFromServerSession();

  const info = await interaction.findOne({
    contentId,
    userId: user._id,
    contentType: type,
  });

  return {
    rating: info?.rating || 0,
    liked: info?.liked || false,
    listened: info?.listened || false,
    sub: info?.sub || false,
  };
};

export default getInteractionInfo;
