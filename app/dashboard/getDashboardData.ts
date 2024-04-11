"use server";

import config from "../../config/config";
import user from "../../models/user";
import { createClient } from "../../utils/supabase/server";

const getDashboardData = async () => {
  const res = await fetch(config.baseUrl + config.paths.api.dashboard);
  console.log(res);
  const data = await res.json();
  return data;
};

export default getDashboardData;
