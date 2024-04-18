import PodcastIndexClient from "podcastdx-client";
const pod = require("podcast-index-api");

const { POD_API_KEY, POD_API_SECRET } = process.env;

const podClient = pod(POD_API_KEY, POD_API_SECRET);

export default podClient;
