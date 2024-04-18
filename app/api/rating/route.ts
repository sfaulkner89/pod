import { NextRequest } from "next/server";
import { getUserFromServerSession } from "../../../handlers/server/getUser";
import episodeRating from "../../../models/episodeRating";
import podRating from "../../../models/podRating";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const contentId = searchParams.get("contentId");
  const isPod = searchParams.get("type") === "pod";
  const rating = searchParams.get("rating");
  const user = await getUserFromServerSession();

  if (!user) {
    return Response.json(
      { message: "You must be logged in to like content" },
      { status: 401 }
    );
  }

  const contentField = isPod ? "podId" : "episodeId";

  const ratedContent = await (isPod
    ? podRating
    : episodeRating
  ).findOneAndUpdate(
    { [contentField]: contentId, userId: user._id, rating },
    {
      $setOnInsert: { userId: user._id, rating },
    },
    { upsert: true, new: true }
  );

  return Response.json(ratedContent, { status: 200 });
}
