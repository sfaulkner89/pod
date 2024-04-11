import episode from "../../models/episode";
import pod from "../../models/pod";

const getPopularWithAll = async () => {
  const popularPods = await pod.find().sort({ timesViewed: -1 }).limit(20);
  const popularEpisodes = await episode
    .find()
    .sort({ timesViewed: -1 })
    .limit(20);

  return {
    pods: popularPods,
    episodes: popularEpisodes,
  };
};

export default getPopularWithAll;
