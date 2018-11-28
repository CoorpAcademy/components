const set = require('lodash/fp/set');
const pipe = require('lodash/fp/pipe');
const config = require('../webpack.config');

const entry = {
  Player: ['babel-polyfill', './sandbox']
};

module.exports = pipe(set('entry', entry), set('devServer.disableHostCheck', true))(config);
