import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextAppDirEmotionCacheProvider } from "tss-react/next/appDir";
import NavBar from "../components/NavBar/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vault Podcasts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <NextAppDirEmotionCacheProvider options={{ key: "css" }}>
        <body className={inter.className}>
          <header>
            <NavBar />
          </header>
          {children}
        </body>
      </NextAppDirEmotionCacheProvider>
    </html>
  );
}
