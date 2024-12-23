import { withNextVideo } from "next-video/process";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Disable the Image Optimization API
  },
};

export default withNextVideo(nextConfig);
