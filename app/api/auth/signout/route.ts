import { createClient } from "@/utils/supabase/server";
import { type NextRequest, NextResponse } from "next/server";
import config from "@/config/config";

export async function POST(req: NextRequest) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    await supabase.auth.signOut();
  }

  //   revalidatePath("/", "layout");
  return NextResponse.redirect(`${config.baseUrl}${config.paths.auth.login}`);
}
