const set = require('lodash/fp/set');
const config = require('../webpack.config');

const entry = {
  Player: ['babel-polyfill', './sandbox']
};

module.exports = set('entry', entry)(config);
