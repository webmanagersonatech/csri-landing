/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",

  trailingSlash: true,

  images: {
    unoptimized: true,
  },

  // basePath: "/demo",
  // assetPrefix: "/demo/",
};

module.exports = nextConfig;