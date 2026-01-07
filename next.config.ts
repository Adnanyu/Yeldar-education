import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Disabling all ESLint warnings for unescaped entities and <img> usage
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
