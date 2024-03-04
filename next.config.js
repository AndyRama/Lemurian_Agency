/** @type {import('next').NextConfig} */
const { withContentlayer } = require("next-contentlayer");
const nextConfig = {};

module.exports = withContentlayer(nextConfig);

module.exports = {
  // swcMinify: false,
  // babelPreset: 'next/babel',
};
