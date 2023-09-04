/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
  dest: "public",
  fallbacks: {
    document: '/offline/page.tsx',
  },
});

const nextConfig = {};

module.exports = withPWA(nextConfig);
