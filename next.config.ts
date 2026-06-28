import type { NextConfig } from "next";
import path from "path";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  ...(isProd ? { output: "export" as const } : {}),
  images: { unoptimized: true },
  outputFileTracingRoot: path.join(__dirname),
  devIndicators: false,
};

export default nextConfig;
