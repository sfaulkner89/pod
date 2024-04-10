import pod from "../models/pod";
import { Pod } from "../types/common";
import { connectDatabase } from "../util/db";

export default async function AddToLocalDB(pods: Pod[]) {
  await connectDatabase();
  let added = 0;
  for (let podcast of pods) {
    const doc = await pod.findOneAndUpdate(
      { id: podcast.id },
      { $set: podcast, $inc: { timesSearched: 1 } },
      { upsert: true, new: true }
    );
    if (doc.timesSearched === 1) {
      added++;
    }
  }
  console.log("added " + added + " podcasts to the database");
  return added;
}
