import { NextRequest } from "next/server";
import { getUserFromServerSession } from "../../../handlers/server/getUser";
import episodeLike from "../../../models/episodeLike";
import podLike from "../../../models/podLike";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const contentId = searchParams.get("contentId");
  const isPod = searchParams.get("type") === "pod";
  const user = await getUserFromServerSession();

  if (!user) {
    return Response.json(
      { message: "You must be logged in to like content" },
      { status: 401 }
    );
  }

  const contentField = isPod ? "podId" : "episodeId";

  const likedContent = await (isPod ? podLike : episodeLike).findOneAndUpdate(
    { [contentField]: contentId, userId: user._id },
    {
      $bit: { liked: { xor: 1 } },
      $setOnInsert: {
        liked: true,
        userId: user._id,
        [contentField]: contentId,
      },
    },
    { upsert: true, new: true }
  );

  return Response.json(likedContent, { status: 200 });
}
