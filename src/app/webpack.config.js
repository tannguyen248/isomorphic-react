const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env) => {
  return {
    devtool: env.development ? 'source-map' : 'false',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_module/,
          include: path.resolve(__dirname, 'web'),
          loader: 'babel-loader',
          query: {
            presets: ['es2015']
          }
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
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: '../index.html',
        minify: true,
        excludeChunks: ['server'],
        favIconUrl: `${process.env.PUBLIC_URL || ''}/static/media/favicon.ico`,
      }),
    ],
    optimization: {
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: 20,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              const packageName = module.context.match(
                /[\\/]node_modules[\\/](.*?)([\\/]|$)/
              )[1];

              // npm package names are URL-safe, but some servers don't like @ symbols
              return `npm.${packageName.replace('@', '')}`;
            },
          },
        },
      },
    },
  };
};
