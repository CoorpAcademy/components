const {join} = require('path');
const set = require('lodash/fp/set');
const update = require('lodash/fp/update');
const pipe = require('lodash/fp/pipe');
const concat = require('lodash/fp/concat');
const config = require('../webpack.config');

const entry = {
  Player: ['babel-polyfill', './sandbox']
};

module.exports = pipe(
  update(
    'module.rules',
    concat([
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        },
        exclude: /(node_modules|bower_components)/,
        include: [join(__dirname)]
      }
    ])
  ),
  set('entry', entry)
)(config);
