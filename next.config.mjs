/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
  images: {
    remotePatterns: [
        {
          protocol: "https",
          hostname: "fakestoreapi.com",
        },
      ],// Add this line
  },
};

export default nextConfig;
