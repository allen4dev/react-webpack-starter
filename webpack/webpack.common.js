const merge = require('webpack-merge');

const parts = require('./webpack.parts');

const commonConfig = merge([
  parts.babelTranspile(),
  parts.loadImages({ limit: 20000 }),
]);

module.exports = commonConfig;
