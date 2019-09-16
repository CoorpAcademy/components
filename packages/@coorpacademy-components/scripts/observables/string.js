const pipe = require('lodash/fp/pipe');
const camelCase = require('lodash/fp/camelCase');
const upperFirst = require('lodash/fp/upperFirst');

const pascalCase = pipe(
  camelCase,
  upperFirst
);

module.exports = {
  pascalCase
};
