import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Vercel gerencia Next.js nativamente — sem output: 'export'
  // Isso habilita Server Actions, API Routes e Image Optimization no futuro
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
