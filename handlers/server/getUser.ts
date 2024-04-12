import user from "../../models/user";
import { connectDatabase } from "../../utils/db";
import { createClient } from "../../utils/supabase/server";

export const getUserFromServerSession = async () => {
  await connectDatabase();
  const supabase = createClient();
  const authUser = (await supabase.auth.getUser()).data.user;
  if (!authUser) {
    return null;
  }
  return await user.findOne({ authId: authUser.id });
};
