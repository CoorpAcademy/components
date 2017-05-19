const path = require('path');
const pipe = require('lodash/fp/pipe');
const set = require('lodash/fp/set');
const {default: generateConfig} = require('@coorpacademy/webpack-config');

const appName = 'Components';

const entry = {
  components: ['./src']
};

const output = {
  library: appName,
  path: path.resolve(__dirname, 'dist'),
  filename: 'components.js'
};

module.exports = pipe(generateConfig, set('entry', entry), set('output', output))(
  process.env.NODE_ENV
);
