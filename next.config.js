/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  experimental: {
    workerThreads: false,
    cpus: 1,
  },
  staticPageGenerationTimeout: 300,
  webpack: (config, { isServer }) => {
    config.cache = false;
    config.snapshot = {
      managedPaths: [],
    };
    return config;
  },
};

module.exports = nextConfig;
