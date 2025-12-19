/** @type {import('next').NextConfig} */
const isGithubPages = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  images: { unoptimized: true },

  // ✔ Only apply basePath on GitHub Pages
  basePath: isGithubPages ? "/Portfolio" : "",
  assetPrefix: isGithubPages ? "/Portfolio" : "",
};

module.exports = nextConfig;
