import interaction from "../../models/interaction";
import { User } from "../../types/models";
import { connectDatabase } from "../../utils/db";
import { getUserFromServerSession } from "./getUser";

const getRecentlyViewed = async (user: User) => {
  const recentlyViewed = await interaction
    .find({
      userId: user?._id,
    })
    .sort({ updatedAt: -1 })
    .limit(10)
    .populate("contentId")
    .exec()
    .catch((e) => {
      console.error(e);
      return [];
    });

  const recentlyViewedEpisodes = recentlyViewed
    .filter((ep) => ep.contentType === "episode")
    .map((ep) => ep.contentId);

  const recentlyViewedPods = recentlyViewed
    .filter((ep) => ep.contentType === "pod")
    .map((ep) => ep.contentId);

  return {
    episodes: recentlyViewedEpisodes ?? [],
    pods: recentlyViewedPods ?? [],
  };
};

export default getRecentlyViewed;
