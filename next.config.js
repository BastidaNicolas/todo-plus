const withPWA = require("@ducanh2912/next-pwa").default({
    dest: "public",
    disable: process.env.NODE_ENV === "development",
    fallbacks: {
        document: "/offline",
    },
  });

  const nextConfig = {
    reactStrictMode: true,
  };

module.exports = withPWA(nextConfig);
