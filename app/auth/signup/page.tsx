"use client";

import React from "react";
import { tss } from "tss-react";
import Input from "../../../components/common/input";
import Button from "../../../components/common/Button";
import { useRouter, useSearchParams } from "next/navigation";
import signUpHandler from "./handlers/signUpHandler";

export default function SignUp() {
  const router = useRouter();
  const [info, setInfo] = React.useState({
    name: "",
    username: "",
    displayName: "",
  });
  const searchParams = useSearchParams();
  const authId = searchParams.get("authId");
  const submitHandler = async () => {
    const plainInfo = { ...info };
    if (authId) {
      await signUpHandler(plainInfo, authId);
    }
    router.push("/dashboard");
  };
  return (
    <>
      <Input
        placeholder="Name"
        onChange={(e) => setInfo((info) => ({ ...info, name: e.target.value }))}
      />
      <Input
        placeholder="User Name"
        onChange={(e) =>
          setInfo((info) => ({ ...info, username: e.target.value }))
        }
      />
      <Input
        placeholder="Display Name"
        onChange={(e) =>
          setInfo((info) => ({ ...info, displayName: e.target.value }))
        }
      />
      <Button onClick={submitHandler}>Sign Up</Button>
    </>
  );
}

const useStyles = tss.create(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
}));
