/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tailwindui.com",
        // port: '',
        // pathname: '/account123/**',
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        // port: '',
        // pathname: '/account123/**',
      },
    ],
  },
};

module.exports = nextConfig;
