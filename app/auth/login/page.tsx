"use client";

import React from "react";
import { tss } from "tss-react";
import Input from "../../../components/common/input";
import Image from "next/image";
import logo from "@/public/vault.webp";
import Joi from "joi";
import { loginHandler, verifyHandler } from "./handlers/authHandler";
import { useRouter } from "next/navigation";
import Button from "../../../components/common/Button";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [otp, setOtp] = React.useState("");
  const [codeSent, setCodeSent] = React.useState(false);

  const router = useRouter();

  const submitHandler = async () => {
    if (
      Joi.string()
        .email({ tlds: { allow: false } })
        .validate(email).error
    ) {
      alert("Invalid email address");
      return;
    }
    if (!codeSent) {
      await loginHandler(email);
      setCodeSent(true);
      return;
    }
    const redUrl = await verifyHandler(email, otp);
    // console.log(redUrl);
    // router.push(redUrl);
  };

  return (
    <>
      <h1>Login/Sign Up</h1>
      <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      {codeSent && (
        <React.Fragment>
          <p>
            You have been sent a code to your email address, please enter below
            to login/sign up.
          </p>
          <Input placeholder="Code" onChange={(e) => setOtp(e.target.value)} />
        </React.Fragment>
      )}
      <Button onClick={submitHandler}>
        {codeSent ? "Login" : "Send Code"}
      </Button>
    </>
  );
}
