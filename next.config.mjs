/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      {
        hostname: "images.pexels.com",
      },
      { hostname: "static.wixstatic.com" },
    ],
  },
};

export default nextConfig;
