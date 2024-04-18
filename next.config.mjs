/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
  publicRuntimeConfig: {
    baseUrlLocal: "http://localhost:3000",
    authServerUrlDev: process.env.SB_URL_DEV,
    authServerAnon: process.env.SB_ANON_DEV,
  },
};

export default nextConfig;
