const path = require('path');
const set = require('lodash/fp/set');
const pipe = require('lodash/fp/pipe');
const config = require('../webpack.config');

const entry = {
  appReview: ['./sandbox/index.tsx']
};

const sandboxConfig = pipe(set('entry', entry), set('devServer.disableHostCheck', true))(config);
sandboxConfig.module.rules.push({
  test: /\.ts(x?)$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'babel-loader'
    },
    {
      loader: 'ts-loader'
    }
  ]
});

sandboxConfig.resolve.extensions = ['.tsx', '.ts', '.js'];
console.log({rules: sandboxConfig.module.rules, extensions: sandboxConfig.resolve.extensions});

module.exports = sandboxConfig;
