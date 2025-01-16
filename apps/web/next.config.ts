import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    loader: 'custom',
    loaderFile: './src/app/components/home/hub-container.tsx',
  },
};

export default nextConfig;
