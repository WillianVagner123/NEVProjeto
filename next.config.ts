import type { NextConfig } from "next";

const isExport = process.env.NEXT_OUTPUT === "export";

const nextConfig: NextConfig = {
  output: isExport ? "export" : undefined,
  images: {
    unoptimized: isExport,
  },
  trailingSlash: isExport,
};

export default nextConfig;
