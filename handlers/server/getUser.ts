import user from "../../models/user";
import { connectDatabase } from "../../utils/db";
import { createClient } from "../../utils/supabase/server";

export const getUserFromServerSession = async () => {
  "use server";
  await connectDatabase();
  const supabase = createClient();
  const authUser = (await supabase.auth.getUser()).data.user;
  return (await getUserFromAuthId(authUser?.id!)) ?? null;
};

export const getUserFromAuthId = async (authId: string) => {
  await connectDatabase();
  return await user.findOne({ authId });
};
