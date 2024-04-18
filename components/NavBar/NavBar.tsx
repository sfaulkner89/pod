import React from "react";
import styles from "./NavBar.module.css";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className={styles.container}>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/search">Search</Link>
      <Link href="/my-pods">My Pods</Link>
    </div>
  );
}
