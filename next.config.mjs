// next.config.mjs
const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'out',
    basePath: isProd ? '/Syntheous' : '',
    assetPrefix: isProd ? '/Syntheous/' : '',
    images: {
        unoptimized: true,
    },
    webpack(config) {
        // Grab the existing rule that handles SVG imports
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