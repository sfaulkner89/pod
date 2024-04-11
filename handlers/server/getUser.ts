import user from "../../models/user";
import { createClient } from "../../utils/supabase/server";

export const getUserFromServerSession = async () => {
  const supabase = createClient();
  const authUser = (await supabase.auth.getUser()).data.user;
  if (!authUser) {
    return null;
  }
  return await user.findOne({ authId: authUser.id });
};
