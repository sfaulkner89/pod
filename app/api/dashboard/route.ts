"use server";

import getPopularWithAll from "../../../handlers/server/getPopularWithAll";
import getPopularWithFollowing from "../../../handlers/server/getPopularWithFollowing";
import getRecentlyViewed from "../../../handlers/server/getRecentlyViewed";
import { getUserFromServerSession } from "../../../handlers/server/getUser";

export async function GET() {
  const currentUser = await getUserFromServerSession();
  const [popularWithFriends, recentlyViewed, popularWithAll] =
    await Promise.all([
      getPopularWithFollowing(currentUser),
      getRecentlyViewed(currentUser),
      getPopularWithAll(), //BASIC, NEEDS FIXING
    ]);

  return Response.json({
    popularWithFriends,
    recentlyViewed,
    popularWithAll,
  });
}
