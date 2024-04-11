import Image from "next/image";
import React from "react";
import logo from "@/public/vault.webp";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        gap: "20px",
      }}
    >
      <Image src={logo} alt="vault" width="200" height="200" />
      {children}
    </div>
  );
}
