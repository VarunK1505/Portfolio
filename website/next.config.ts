import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  // IMPORTANT: because your app lives at /website on Pages
  basePath: '/Portfolio',
  assetPrefix: '/Portfolio/'
};

export default nextConfig;