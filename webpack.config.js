const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, './dist'),
    open: true,
    compress: true,
    hot: true,
    port: 8888,
  },
  devtool: 'inline-source-map',
  entry: {
    app: path.resolve(__dirname, './src/scripts/index.js'),
  },
  output: {
    filename: '[name].[fullhash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpg|ico)$/i,
        loader: 'file-loader',
        exclude: /node_modules/
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Генератор паролей',
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: `style.[fullhash].css`,
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
};