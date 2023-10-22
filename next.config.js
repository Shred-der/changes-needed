/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,
  webpack: function (config, options) {
    config.experiments = {
      asyncWebAssembly: true,
      layers: true, // Add this line to enable experimental layers
    };
    return config;
  },
};
module.exports = nextConfig
