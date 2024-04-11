"use server";

import config from "../../../../config/config";
import user from "../../../../models/user";
import { connectDatabase } from "../../../../utils/db";
import { createClient } from "../../../../utils/supabase/server";

const client = createClient();

export const loginHandler = async (email: string) => {
  const { error } = await client.auth.signInWithOtp({
    email,
    options: {
      shouldCreateUser: true,
    },
  });
  if (error) {
    throw error;
  }
};

export const verifyHandler = async (email: string, otp: string) => {
  const { data, error } = await client.auth.verifyOtp({
    email,
    token: otp,
    type: "email",
  });
  if (error) {
    return config.paths.auth.login + "?error=Invalid OTP";
  }

  if (data.user) {
    const id = data.user.id;
    await connectDatabase();
    const existingUser = await user.findOne({ authId: id });
    console.log(existingUser);
    if (!existingUser) {
      console.log("User not found");
      return config.paths.auth.signup + "?authId=" + id;
    }
    return "/dashboard";
  }
  return config.paths.auth.login + "?error=Invalid OTP";
};
