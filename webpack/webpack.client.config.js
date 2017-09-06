const { resolve } = require('path');
const merge = require('webpack-merge');

const commonConfig = require('./webpack.common');
const parts = require('./webpack.parts');

const config = merge([
  // loaders
  parts.injectCSS(),
  // plugins
  parts.setupHTML({
    title: 'Simple webpack starter',
    template: 'index.ejs',
  }),
  parts.setupHMR(),
  // config
  parts.devServer(),
  {
    context: resolve(__dirname, '..'),
    entry: [resolve('src', 'index.js')],
    output: {
      filename: 'bundle.js',
      path: resolve('dist'),
    },
    resolve: {
      extensions: ['.js', '.jsx', 'json'],
    },
    target: 'web',
  },
  commonConfig,
]);

console.log(config);

module.exports = config;
