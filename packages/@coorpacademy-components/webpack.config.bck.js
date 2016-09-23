const path = require('path');
const createConfig = require('./scripts/create-webpack-config');

const entry = {
  components: path.join(__dirname, 'src/index')
};

const output = {
  library: 'Coorponents',
  filename: '[name].js',
  path: path.join(__dirname, 'dist')
};

module.exports = createConfig(entry, output);
