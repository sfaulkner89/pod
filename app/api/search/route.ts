import { NextRequest } from "next/server";
import addToLocalDB from "../../../handlers/server/addToLocalDB";
import { Episode, Pod } from "../../../types/models";
import podClient from "../../../utils/podClient";
import rssParser from "rss-parser";
import cleanEpisodeKeysAndAddInfo, {
  rssObject,
} from "../../../handlers/tools/cleanEpisodeKeys";
import searchString from "../../../handlers/tools/episodeSearchString";

const parser = new rssParser();

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const q = searchParams.get("q");
  const rssUrl = searchParams.get("rssUrl");
  const podId = searchParams.get("podId");
  if (rssUrl) {
    const res = await parser.parseURL(rssUrl);
    let episodes;
    const cleanedEps = cleanEpisodeKeysAndAddInfo(
      res as unknown as rssObject,
      podId!
    );
    delete (res as { items?: unknown }).items;

    try {
      episodes = await addToLocalDB(cleanedEps, "episode");
    } catch (e) {
      console.error(e);
    }

    const filteredEps = episodes?.filter((episode: Episode) => {
      return searchString(episode).includes(q?.toLowerCase() || "");
    });
    return Response.json(filteredEps, { status: 200 });
  }
  const res = await podClient.search(q || "");
  let pods;
  try {
    pods = await addToLocalDB(res.feeds as unknown as Pod[], "pod");
  } catch (e) {
    console.error(e);
  }
  return Response.json(pods, { status: 200 });
}

const ep = {
  title: "Ep 195: Toe Talk Wit Dem Boyz",
  link: "https://omny.fm/shows/this-is-important/ep-195-toe-talk-wit-dem-boyz",
  pubDate: "Tue, 09 Apr 2024 10:00:00 +0000",
  "content:encoded":
    `<p dir="ltr" data-test-bidi="">Today, this is what's important:</p>\r\n` +
    '<p dir="ltr" data-test-bidi="">Atlantic City, white noise, Seal &amp; Sade, toes, film critics, comedy films, &amp; more. </p>\r\n' +
    '<p dir="ltr" data-test-bidi=""><a href="https://www.ticketmaster.com/event/0200606818849080?_ga=2.228080733.1978551934.1710533048-1666025036.1710533048&amp;_gl=1*yfgz6l*_ga*MTY2NjAyNTAzNi4xNzEwNTMzMDQ4*_ga_1SNH8CQS71*MTcxMDUzNTI1Ny4yLjEuMTcxMDUzNTI1OS41OC4wLjA">Buy your tickets to the LIVE This Is Important in Atlantic City HERE!</a></p><p>See <a href="https://omnystudio.com/listener">omnystudio.com/listener</a> for privacy information.</p>',
  "content:encodedSnippet":
    "Today, this is what's important:\n" +
    "\r\n" +
    "Atlantic City, white noise, Seal & Sade, toes, film critics, comedy films, & more. \n" +
    "\r\n" +
    "Buy your tickets to the LIVE This Is Important in Atlantic City HERE!\n" +
    "See omnystudio.com/listener for privacy information.",
  enclosure: {
    url: "https://chtbl.com/track/5899E/podtrac.com/pts/redirect.mp3/pscrb.fm/rss/p/traffic.omny.fm/d/clips/e73c998e-6e60-432f-8610-ae210140c5b1/a41bd365-c6bc-4966-9ac2-ae28005326f5/0dd93dac-77aa-41ed-940d-b14c015076c5/audio.mp3?utm_source=Podcast&in_playlist=6097c5b8-233a-45bf-8f11-ae2800532703",
    length: "48746338",
    type: "audio/mpeg",
  },
  content:
    `<p dir="ltr" data-test-bidi="">Today, this is what's important:</p>\r\n` +
    '<p dir="ltr" data-test-bidi="">Atlantic City, white noise, Seal &amp; Sade, toes, film critics, comedy films, &amp; more. </p>\r\n' +
    '<p dir="ltr" data-test-bidi=""><a href="https://www.ticketmaster.com/event/0200606818849080?_ga=2.228080733.1978551934.1710533048-1666025036.1710533048&amp;_gl=1*yfgz6l*_ga*MTY2NjAyNTAzNi4xNzEwNTMzMDQ4*_ga_1SNH8CQS71*MTcxMDUzNTI1Ny4yLjEuMTcxMDUzNTI1OS41OC4wLjA">Buy your tickets to the LIVE This Is Important in Atlantic City HERE!</a></p><p>See <a href="https://omnystudio.com/listener">omnystudio.com/listener</a> for privacy information.</p>',
  contentSnippet:
    "Today, this is what's important:\n" +
    "\r\n" +
    "Atlantic City, white noise, Seal & Sade, toes, film critics, comedy films, & more. \n" +
    "\r\n" +
    "Buy your tickets to the LIVE This Is Important in Atlantic City HERE!\n" +
    "See omnystudio.com/listener for privacy information.",
  guid: "0dd93dac-77aa-41ed-940d-b14c015076c5",
  categories: [
    "this is important",
    "adam devine",
    "blake anderson",
    "anders holm",
    "kyle newacheck",
    "episode 195",
    "atlantic city",
    "hard rock hotel and casino",
    "live show",
    "reno",
    "las vegas",
    "gambling",
    "travel",
    "white noise",
    "sleeping",
    "kids",
    "reading",
    "books",
    "baby",
    "piglet",
    "beau",
    "dr suess",
    "seal attacks",
    "seal",
    "sade",
    "singing",
    "collabs",
    "music",
    "musician",
    "toes",
    "fungus",
    "doctor",
    "gross",
    "film",
    "critics",
    "rotten tomatoes",
    "adam sandler",
    "grown ups",
    "movies",
    "films",
    "ratings",
    "comedys",
    "comedies",
    "Toe Talk wit Dem Boyz",
  ],
  isoDate: "2024-04-09T10:00:00.000Z",
  itunes: {
    author: "iHeartPodcasts",
    explicit: "yes",
    duration: "3044",
    image:
      "https://www.omnycontent.com/d/programs/e73c998e-6e60-432f-8610-ae210140c5b1/a41bd365-c6bc-4966-9ac2-ae28005326f5/image.jpg?t=1684956895&size=Large",
    episode: "195",
    keywords:
      "this is important, adam devine, blake anderson, anders holm, kyle newacheck, episode 195, atlantic city, hard rock hotel and casino, live show, reno, las vegas, gambling, travel, white noise, sleeping, kids, reading, books, baby, piglet, beau, dr suess, seal attacks, seal, sade, singing, collabs, music, musician, toes, fungus, doctor, gross, film, critics, rotten tomatoes, adam sandler, grown ups, movies, films, ratings, comedys, comedies, Toe Talk wit Dem Boyz",
    episodeType: "full",
  },
};
