import mongoose from "mongoose";

export async function connectDatabase() {
  if (mongoose.connection.readyState) {
    return;
  }
  const uri =
    process.env.VERCEL_ENV === "production"
      ? process.env.MONGODB_URI_PROD
      : process.env.MONGODB_URI_LOCAL;

  await mongoose.connect(uri || "");
}
