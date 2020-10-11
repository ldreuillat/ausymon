module.exports = {
  configureWebpack: {
    devtool: 'source-map',
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/ausymon/'
    : '/',
  outputDir: 'dist/ausymon',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
};
