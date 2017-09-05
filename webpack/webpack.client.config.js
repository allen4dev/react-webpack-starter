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
      {
        test: /\.css?$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 20000,
          },
        },
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
