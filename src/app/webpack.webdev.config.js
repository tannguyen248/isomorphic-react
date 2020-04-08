const path = require('path');
const merge = require('webpack-merge');
const webconfig= require('./webpack.web.config.js');

module.exports = merge(webconfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    path: path.resolve(__dirname, 'dist/web'),
    publicPath: `${process.env.PUBLIC_URL || ''}/static/`,
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist/web'),
    hot: true
  },
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 300,
    poll: 1000,
  },
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  },
});