/** @type {import('next').NextConfig} */

const nextConfig = {
  outputFileTracingRoot: process.cwd(),

  webpack: (config) => {
    config.watchOptions = {
      ...config.watchOptions,
      ignored: [
        '**/node_modules/**',
        '**/.git/**',
        '**/.next/**',
      ],
    };

    return config;
  },
};

export default nextConfig;