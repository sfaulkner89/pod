import episode from "../../models/episode";
import pod from "../../models/pod";
import { Episode, Pod } from "../../types/models";
import { connectDatabase } from "../../utils/db";

export default async function addToLocalDB(
  entries: Pod[] | Episode[],
  type: "pod" | "episode"
) {
  await connectDatabase();
  let added = 0;
  const isPod = type === "pod";
  const collection = isPod ? pod : episode;
  const newContent = [];
  for (let entry of entries) {
    const doc = await collection.findOneAndUpdate(
      { id: entry.id },
      { $set: entry, $inc: { timesSearched: 1 } },
      { upsert: true, new: true }
    );
    if (doc.timesSearched === 1) {
      added++;
    }
    newContent.push(doc);
  }
  console.log("added " + added + " " + type + "s " + "to the database");
  return newContent;
}
