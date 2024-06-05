/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
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
        pathname: "**",
      },
    ],
    // unoptimized: true,
  },
};

export default nextConfig;
