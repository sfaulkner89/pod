/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "megaphone.imgix.net",
        port: "",
        pathname: "/image/upload/**",
      },
    ],
  },
};

export default nextConfig;
