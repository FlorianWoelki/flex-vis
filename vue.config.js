module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/flex-vis/'
    : '/',

  pluginOptions: {
    autoRouting: {
      chunkNamePrefix: 'page-',
    },
  },
};
