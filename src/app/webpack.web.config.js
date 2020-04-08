const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.config.js');

module.exports = merge(common, {
  entry: ['@babel/polyfill', 'react-hot-loader/patch', './web/index.js'],
  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist/web'),
    publicPath: `${process.env.PUBLIC_URL || ''}/static/`,
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
    extensions: ['.js', '.jsx', '.gif'],
  },
});
