/** @type {import('next').NextConfig} */

const { svgrWebpackRule } = require('./webpack/svgWebpack');

const nextConfig = {
  reactStrictMode: true,
  webpack(webpackConfig) {
    // Enables importing SVGs as React components.
    // See: https://react-svgr.com/docs/next/
    webpackConfig.module.rules.push(svgrWebpackRule);

    return webpackConfig;
  },
};

module.exports = nextConfig;
