const { resolve } = require('path');

const config = {
  context: resolve(__dirname, '..'),
  entry: resolve('src', 'index.js'),
  output: {
    filename: 'bundle.js',
    path: resolve('dist'),
  },
};

module.exports = config;
