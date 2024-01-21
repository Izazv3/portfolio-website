/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  distDir: "out",
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
