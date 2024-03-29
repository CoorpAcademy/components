const path = require('path');
const pipe = require('lodash/fp/pipe');
const set = require('lodash/fp/set');
const update = require('lodash/fp/update');
const {default: generateConfig} = require('@coorpacademy/webpack-config');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');

const appName = 'Components';

const entry = {
  components: ['./src']
};

const output = {
  library: appName,
  path: path.resolve(__dirname, 'dist'),
  filename: 'components.js'
};

module.exports = pipe(
  generateConfig,
  set('entry', entry),
  set('output', output),
  update('plugins', plugins => [...plugins, new BundleAnalyzerPlugin()])
)(process.env.NODE_ENV);
