"use server";
import config from "../../config/config";

const getDashboardData = async () => {
  const res = await fetch(config.baseUrl + config.paths.api.dashboard);
  const data = await res.json();
  return data;
};

export default getDashboardData;
