const { resolve } = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const config = {
  context: resolve(__dirname, '..'),
  entry: resolve('src', 'index.js'),
  output: {
    filename: 'bundle.js',
    path: resolve('dist'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'Simple webpack starter',
      template: 'index.ejs',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', 'json'],
  },
  target: 'web',
};

module.exports = config;
