// next.config.mjs
const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // Required for static export
  distDir: 'out',            // Output directory// Correct asset paths for GitHub Pages
  images: {
    unoptimized: true,      // Disable Next.js image optimization for static sites
  },
  webpack(config) {
    // SVG Handling
    const fileLoaderRule = config.module.rules.find((rule) =>
        rule.test?.test?.(".svg")
    );

    config.module.rules.push(
        {
          ...fileLoaderRule,
          test: /\.svg$/i,
          resourceQuery: /url/, // *.svg?url
        },
        {
          test: /\.svg$/i,
          issuer: fileLoaderRule.issuer,
          resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
          use: ["@svgr/webpack"],
        }
    );

    fileLoaderRule.exclude = /\.svg$/i;
    return config;
  },
};

export default nextConfig;
