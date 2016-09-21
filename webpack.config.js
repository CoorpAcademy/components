const path = require('path');
const merge = require('webpack-merge');

const defaultConfig = require('./webpack.config.default');
const styleConfig = require('./webpack.config.style');

const moocConfig = {
  entry: {
    components: path.join(__dirname, 'src', 'index')
  },
  output: {
    path: path.join(__dirname, 'dist')
  }
};

module.exports = merge.smart(
  styleConfig,
  defaultConfig,
  moocConfig
);
