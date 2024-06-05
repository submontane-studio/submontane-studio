/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  // experimental: {
  //   runtime: "edge",
  // },
  // output: "export",
  images: {
    domains: ["images.microcms-assets.io"],
    // unoptimized: true,
  },
};

export default nextConfig;
