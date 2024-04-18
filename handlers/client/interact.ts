import { Types } from "mongoose";
import config from "../../config/config";

const interact = (
  contentType: "pod" | "episode",
  contentId: Types.ObjectId,
  data: any
) => {
  fetch(config.paths.api.interact, {
    method: "POST",
    body: JSON.stringify({ data, contentId, contentType }),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export default interact;
