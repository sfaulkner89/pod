"use server";

import user from "../../../../models/user";
import { connectDatabase } from "../../../../utils/db";

type MyFormData = {
  name: string;
  username: string;
  displayName: string;
};

const signUpHandler = async (formData: MyFormData, authId: string) => {
  const { name, username, displayName } = formData;
  await connectDatabase();
  const newUser = await user
    .create({
      name,
      username,
      displayName,
      authId,
    })
    .catch((err) => {
      console.error(err);
    });
  return newUser;
};

export default signUpHandler;
