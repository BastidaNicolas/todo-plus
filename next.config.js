// const path = require("path");

const withPWA = require("@ducanh2912/next-pwa").default({
    dest: "public",
    fallbacks: {
        document: "/offline",
    },
  });

  const nextConfig = {
    reactStrictMode: true,
  };

module.exports = withPWA(nextConfig);
