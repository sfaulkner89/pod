import getPopularWithAll from "../../../handlers/server/getPopularWithAll";
import getPopularWithFollowing from "../../../handlers/server/getPopularWithFollowing";
import getRecentlyViewed from "../../../handlers/server/getRecentlyViewed";
import { connectDatabase } from "../../../utils/db";

export async function GET() {
  await connectDatabase();
  const [popularWithFriends, recentlyViewed, popularWithAll] =
    await Promise.all([
      getPopularWithFollowing(),
      getRecentlyViewed(),
      getPopularWithAll(), //BASIC, NEEDS FIXING
    ]);

  return Response.json({
    popularWithFriends,
    recentlyViewed,
    popularWithAll,
  });
}
