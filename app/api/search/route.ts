//@ts-ignore
import pod from "podcast-index-api";
import PodcastIndexClient from "podcastdx-client";
import { NextRequest } from "next/server";
import AddToLocalDB from "../../../handlers/addToLocalDB";
import { Pod } from "../../../types/common";

const { POD_API_KEY, POD_API_SECRET } = process.env;

const podClient = pod(POD_API_KEY, POD_API_SECRET);

const podClient2 = new PodcastIndexClient({
  key: POD_API_KEY,
  secret: POD_API_SECRET,
});

export async function GET(req: NextRequest) {
  const res = await podClient2.search(req.nextUrl.searchParams.get("q") || "");
  if (!res) return Response.json(res, { status: 500 });
  console.log(res);
  try {
    AddToLocalDB(res.feeds as unknown as Pod[]);
  } catch (e) {
    console.error(e);
  }
  return Response.json(res, { status: 200 });
}
