const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_module/,
        include: path.resolve(__dirname, 'web'),
        loader: 'babel-loader',
      },
      {
        test: /\.(png|svg|jpg|gif|ico)$/,
        include: path.resolve(__dirname, 'web'),
        loader: 'file-loader',
        options: {
          name: '[name].[hash:8].[ext]',
          outputPath: 'media/',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      minify: true,
      excludeChunks: ['server'],
      favIconUrl: `${process.env.PUBLIC_URL || ''}/static/media/favicon.ico`,
    }),
  ]
};
