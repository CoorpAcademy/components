const path = require('path');
const set = require('lodash/fp/set');
let config = require('@coorpacademy/webpack-config');

const appName = 'Components';

const entry = {
  components: ['./src']
};

const output = {
  library: appName,
  path: path.resolve(__dirname, 'dist'),
  filename: 'components.js'
};

config = set('entry', entry, config);
config = set('output', output, config);

module.exports = config;
