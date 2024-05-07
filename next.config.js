/** @type {import('next').NextConfig} */
import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";

if (process.env.NODE_ENV === "development") {
  await setupDevPlatform();
}

const nextConfig = {
  // reactStrictMode: true,
  // experimental: {
  //   runtime: "edge",
  // },
  // output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.microcms-assets.io",
        port: "",
        pathname: "/assets/**/**",
      },
    ],
    // unoptimized: true,
  },
};

export default nextConfig;
