//@ts-ignore
import PodcastIndexClient from "podcastdx-client";
import { NextRequest } from "next/server";
import addToLocalDB from "../../../handlers/server/addToLocalDB";
import { Episode, Pod } from "../../../types/models";

const { POD_API_KEY, POD_API_SECRET } = process.env;

export const podClient2 = new PodcastIndexClient({
  key: POD_API_KEY,
  secret: POD_API_SECRET,
});

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const q = searchParams.get("q");
  const podId = searchParams.get("podId");
  if (podId && Number(podId) > 0) {
    console.log("episode");
    const res = await podClient2.episodesByFeedId(Number(podId));
    let episodes;
    try {
      episodes = await addToLocalDB(
        res.items as unknown as Episode[],
        "episode"
      );
    } catch (e) {
      console.error(e);
    }
    return Response.json(episodes, { status: 200 });
  }
  console.log(q);
  const res = await podClient2.search(q || "");
  console.log(res);
  let pods;
  try {
    pods = await addToLocalDB(res.feeds as unknown as Pod[], "pod");
  } catch (e) {
    console.error(e);
  }
  return Response.json(pods, { status: 200 });
}
