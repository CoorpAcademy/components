const {promisify} = require('util');
const {readdir, stat} = require('fs');
const nAry = require('lodash/fp/nAry');
const pipe = require('lodash/fp/pipe');
const memoize = require('lodash/fp/memoize');

const readdirP = pipe(promisify, nAry(1), memoize)(readdir);
const statP = pipe(promisify, nAry(1), memoize)(stat);

module.exports = {
  readdirP,
  statP
};
