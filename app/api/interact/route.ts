import { NextRequest } from "next/server";
import { getUserFromServerSession } from "../../../handlers/server/getUser";
import interaction from "../../../models/interaction";

export async function POST(req: NextRequest) {
  const user = await getUserFromServerSession();

  const { data, contentId, contentType } = await req.json();

  await interaction
    .findOneAndUpdate(
      { contentId },
      { ...data, contentType, userId: user._id },
      { upsert: true, new: true }
    )
    .catch((err) => {
      console.error(err);
      return Response.json({ message: "interaction failed" }, { status: 500 });
    });

  return Response.json({ message: "interaction successful" }, { status: 200 });
}
