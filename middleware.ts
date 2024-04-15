import { NextRequest, NextResponse } from "next/server";
import {
  createSupabaseReqResClient,
  updateSession,
} from "@/utils/supabase/middleware";
import { default as appConfig } from "@/config/config";

export async function middleware(req: NextRequest) {
  const supabase = createSupabaseReqResClient(req, NextResponse.next());
  const baseUrl = req.nextUrl.origin;
  const sessionUser = (await supabase.auth.getUser()).data.user;

  console.log("MIDDLE", await supabase.auth.getSession());

  if (
    !sessionUser &&
    !req.nextUrl.pathname.startsWith(appConfig.paths.auth.login) &&
    !req.nextUrl.pathname.startsWith(appConfig.paths.auth.signup) &&
    !req.nextUrl.pathname.startsWith("/temp")
  ) {
    console.log("Redirecting to login");
    return NextResponse.redirect(`${baseUrl}${appConfig.paths.auth.login}`);
  }

  if (
    sessionUser &&
    req.nextUrl.pathname.startsWith(appConfig.paths.auth.login)
  ) {
    return NextResponse.redirect(`${baseUrl}/dashboard`);
  }
  return await updateSession(req);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
