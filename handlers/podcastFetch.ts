"use server";

import PodcastIndexClient from "podcastdx-client";

const { POD_API_KEY, POD_API_SECRET } = process.env;

const podClient = new PodcastIndexClient({
  key: POD_API_KEY,
  secret: POD_API_SECRET,
});

export default podClient;
