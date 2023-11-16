/** @type {import('next').NextConfig} */
const nextConfig = {
  headers: [
    {
      key: "Cross-Origin-Opener-Policy",
      value: "same-origin", // "same-origin-allow-popups"
    },
  ],
};

module.exports = nextConfig;
