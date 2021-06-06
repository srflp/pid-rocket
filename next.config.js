const { withPlugins } = require('next-compose-plugins');

module.exports = withPlugins(
  [[process.env.ANALYZE === 'true' ? require('@next/bundle-analyzer')({ enable: true }) : {}]],
  {
    basePath: process.env.NEXT_PUBLIC_BASE_PATH,
    assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
    future: {
      webpack5: true,
    },
  },
);
