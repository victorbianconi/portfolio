/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { appDir: true },
  images: {
    loader: "default",
    minimumCacheTTL: 60,
    domains: ["image.tmdb.org"],
  },
};

module.exports = nextConfig;
