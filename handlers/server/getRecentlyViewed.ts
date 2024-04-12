import user from "../../models/user";
import { PopulatedProperty } from "../../types/models";
import { connectDatabase } from "../../utils/db";
import { createClient } from "../../utils/supabase/server";

const getRecentlyViewed = async () => {
  await connectDatabase();
  const supabase = createClient();
  const authId = (await supabase.auth.getUser()).data.user?.id;
  const recentlyViewed = (await user
    .findOne({ authId: authId })
    .populate("recentlyViewedEpisodes")
    .populate("recentlyViewedPods")) as PopulatedProperty<
    PopulatedProperty<any, "recentlyViewedEpisodes">,
    "recentlyViewedPods"
  >;

  return {
    episodes: recentlyViewed?.recentlyViewedEpisodes || [],
    pods: recentlyViewed?.recentlyViewedPods || [],
  };
};

export default getRecentlyViewed;
