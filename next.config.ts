import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    env: {
        VALORANT_API_HOST: process.env.VALORANT_API_HOST,
        VALORANT_API_KEY: process.env.VALORANT_API_KEY,
    },
};

export default nextConfig;
