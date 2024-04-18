import { Error } from "mongoose";
import user from "../../models/user";
import { User } from "../../types/models";

const getPopularWithFollowing = async (currentUser: User) => {
  const popularWithFriends = await user
    .aggregate([
      {
        $match: {
          _id: currentUser?._id,
        },
      },
      {
        $lookup: {
          from: "User",
          localField: "following",
          foreignField: "_id",
          as: "following",
        },
      },
      {
        $unwind: "$following",
      },
      {
        $lookup: {
          from: "Subscription",
          localField: "following._id",
          foreignField: "userId",
          as: "following.subscriptions",
        },
      },
      {
        $lookup: {
          from: "EpisodeLike",
          localField: "following._id",
          foreignField: "userId",
          as: "following.episodeLikes",
        },
      },
      {
        $lookup: {
          from: "EpisodeComment",
          localField: "following._id",
          foreignField: "userId",
          as: "following.episodeComments",
        },
      },
      {
        $lookup: {
          from: "EpisodeRating",
          localField: "following._id",
          foreignField: "userId",
          as: "following.episodeRatings",
        },
      },
      {
        $lookup: {
          from: "PodLike",
          localField: "following._id",
          foreignField: "userId",
          as: "following.podLikes",
        },
      },
      {
        $lookup: {
          from: "PodComment",
          localField: "following._id",
          foreignField: "userId",
          as: "following.podComments",
        },
      },
      {
        $lookup: {
          from: "PodRating",
          localField: "following._id",
          foreignField: "userId",
          as: "following.podRatings",
        },
      },
      {
        $group: {
          _id: null,
          pods: {
            $push: {
              $concatArrays: [
                "$following.podLikes",
                "$following.podComments",
                "$following.podRatings",
              ],
            },
          },
          episodes: {
            $push: {
              $concatArrays: [
                "$following.episodeLikes",
                "$following.episodeComments",
                "$following.episodeRatings",
              ],
            },
          },
        },
      },
      {
        $project: {
          _id: 0,
          pods: 1,
          episodes: 1,
        },
      },
      {
        $unwind: "$pods",
      },
      {
        $group: {
          _id: "$pods",
          count: { $sum: 1 },
        },
      },
      {
        $project: {
          _id: 0,
          id: "$_id",
          count: 1,
        },
      },
      {
        $facet: {
          podCounts: [
            { $unwind: "$pods" },
            { $group: { _id: "$pods", count: { $sum: 1 } } },
            { $sort: { count: -1 } },
            { $limit: 20 },
            {
              $lookup: {
                from: "pods",
                localField: "_id",
                foreignField: "_id",
                as: "pod",
              },
            },
            { $unwind: "$pod" },
            { $addFields: { "pod.count": "$count" } },
            { $replaceRoot: { newRoot: "$pod" } },
          ],
          episodeCounts: [
            { $unwind: "$episodes" },
            { $group: { _id: "$episodes", count: { $sum: 1 } } },
            { $sort: { count: -1 } },
            { $limit: 20 },
            {
              $lookup: {
                from: "episodes",
                localField: "_id",
                foreignField: "_id",
                as: "episode",
              },
            },
            { $unwind: "$episode" },
            { $addFields: { "episode.count": "$count" } },
            { $replaceRoot: { newRoot: "$episode" } },
          ],
        },
      },
    ])
    .catch((e: Error) => {
      console.error(e);
      return null;
    });

  if (!popularWithFriends) {
    return null;
  }

  return {
    pods: popularWithFriends[0]?.podCounts || [],
    episodes: popularWithFriends[0]?.episodeCounts || [],
  };
};

export default getPopularWithFollowing;
