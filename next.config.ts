import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  devIndicators: false,
  // Old prototype links used hash routes (/#services); those are redirected client-side.
};

export default nextConfig;
