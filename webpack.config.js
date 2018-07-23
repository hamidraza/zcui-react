const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ENV = process.env.NODE_ENV;
const isProd = ENV == 'production';

const hash = isProd ? 'chunkhash':'hash';

const WPConf = {
  mode: isProd ? 'production' : 'development',
  entry: {
    app: './src/app/entry.js',
  },
  output: {
    path: path.resolve(__dirname, 'public/build'),
    filename: `[name].[${hash}].js`,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 0,
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.s[c|a]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      template: './src/index.ejs',
    }),
  ],
  resolve: {
    alias:{
      '~': path.resolve(__dirname, 'src'),
    },
  },
  devServer: {
    contentBase: './public',
    port: 9393,
    hot: true,
    historyApiFallback: true,
  },
};

if (!isProd) {
  WPConf.plugins.push(
    new webpack.HotModuleReplacementPlugin()
  );
}

module.exports = WPConf;
