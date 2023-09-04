/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
  dest: "public",
  fallbacks: {
    document: '/offline',
  },
});

const nextConfig = {};

module.exports = withPWA(nextConfig);
