const ForkTsCheckerPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  webpack: (config, { dev, isServer }) => {
    if (!isServer) {
      // Unset client-side javascript that only works server-side
      // https://github.com/vercel/next.js/issues/7755#issuecomment-508633125
      config.node = { fs: 'empty', module: 'empty' };
    }

    if (dev && isServer) {
      config.plugins.push(
        new ForkTsCheckerPlugin({
          eslint: {
            files: './src/**/*.{ts,tsx}',
          },
        }),
      );
    }

    return config;
  },
};
