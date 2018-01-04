const {join} = require('path');
const {createWriteStream} = require('fs');

const _ = require('lodash/fp');

const stream = createWriteStream(join(__dirname, 'lodash-fp.js'));

stream.write(`// @flow
`);

_.difference(Object.keys(_), ['chain']).forEach(method => {
  const template = `
declare module 'lodash/fp/${method}' {
  declare module.exports: $PropertyType<$Exports<'lodash/fp'>, '${method}'>;
}
`;

  stream.write(template);
});
