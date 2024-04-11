import { createBrowserClient } from "@supabase/ssr";
import config from "@/config/config";

export function createClient() {
  // Create a supabase client on the browser with project's credentials
  return createBrowserClient(config.authServerUrl, config.authServerAnon);
}
