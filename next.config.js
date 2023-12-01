/** @type {import('next').NextConfig} */
const nextConfig = {
   typescript: {
    ignoreBuildErrors: true
   },
    serverActions: {
      bodySizeLimit: '5mb',
    },
    experimental: {
      serverComponentsExternalPackages: ["mongoose"],
    },
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "img.clerk.com",
        },
        {
          protocol: "https",
          hostname: "images.clerk.dev",
        },
        {
          protocol: "https",
          hostname: "uploadthing.com",
        },
        {
          protocol: "https",
          hostname: "placehold.co",
        },
        {
          protocol: "https",
          hostname: "utfs.io", // Added hostname
        },
      ],
    //   typescript: {
    //     ignoreBuildErrors: true,
    //   },
    },
  };
  
  module.exports = nextConfig;