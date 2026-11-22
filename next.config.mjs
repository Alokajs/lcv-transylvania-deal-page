/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.techneapp-staging.site",
         },
    ],
  },
};

export default nextConfig;