import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Dev overlay(nextjs-portal) / SegmentViewNode 오류 방지
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  webpack: (config, { dev }) => {
    // Windows에서 webpack pack 캐시 rename 실패로 .next가 깨지는 문제 완화
    if (dev && process.platform === "win32") {
      config.cache = false;
    }
    return config;
  },
};

export default nextConfig;
