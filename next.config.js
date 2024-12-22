/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      }
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable SWC minification
  swcMinify: false,
  // Use Babel for transpilation
  experimental: {
    forceSwcTransforms: false
  }
};

module.exports = nextConfig;