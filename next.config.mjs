/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.techneapp-staging.site",
         },
      {
        protocol: "https",
        hostname: "www.lcv-staging.site",
      },
      {
        protocol: "https",
        hostname: "cdn.lcv-staging.site",
      },
    ],
  },
};

export default nextConfig;