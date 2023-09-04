// const path = require("path");

const withPWA = require("@ducanh2912/next-pwa").default({
    dest: "public",
//   buildExcludes: ["app-build-manifest.json"],
//   fallbacks: {
//     document: '/_offline',
//   },
  });

// const generateAppDirEntry = (entry) => {
//     const packagePath = require.resolve('@ducanh2912/next-pwa');
//     const packageDirectory = path.dirname(packagePath);
//     const registerJs = path.join(packageDirectory, "register.js");
  
//     return entry().then((entries) => {
//       if (entries["main-app"] && !entries["main-app"].includes(registerJs)) {
//         if (Array.isArray(entries["main-app"])) {
//           entries["main-app"].unshift(registerJs);
//         } else if (typeof entries["main-app"] === "string") {
//           entries["main-app"] = [registerJs, entries["main-app"]];
//         }
//       }
//       return entries;
//     });
//   };

  const nextConfig = {
    // reactStrictMode: true,
    // webpack: (config) => {
    //   const entry = generateAppDirEntry(config.entry);
    //   config.entry = () => entry;
  
    //   return config;
    // },
  };

module.exports = withPWA(nextConfig);
