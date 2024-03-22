/** @type {import('next').NextConfig} */

import { hostname } from "os";

const nextConfig = {
  reactStrictMode: true,
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
  },
};

export default nextConfig;
