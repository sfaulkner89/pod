export type Pod = {
  id: number;
  title: string;
  description: string;
  url: string;
  originalUrl: string;
  link: string;
  image: string;
  feedUrl: string;
  inCrawlQueue: number;
  inPollingQueue: number;
  priority: number;
  lastGoodHttpStatusTime: number;
  lastHttpStatus: number;
  contentType: string;
  itunesId: number;
  generator: string;
  language: string;
  type: number;
  dead: number;
  crawlErrors: number;
  parseErrors: number;
  categories: Object[];
  locked: number;
  explicit: boolean;
  podcastGuid: string;
  medium: string;
  episodeCount: number;
  imageUrlHash: number;
  newestItemPubdate: number;
  //
  rating?: number;
};
