const {Transform} = require('stream');
const {join, resolve} = require('path');
const _join = require('lodash/fp/join');
const camelCase = require('lodash/fp/camelCase');
const last = require('lodash/fp/last');
const pipe = require('lodash/fp/pipe');
const slice = require('lodash/fp/slice');
const split = require('lodash/fp/split');
const upperFirst = require('lodash/fp/upperFirst');
const createComponentFileStream = require('./component-files');

const pascalCase = pipe(camelCase, upperFirst);

const createComponentStream = cwd => {
  const parseFilePath = pipe(split('/'), slice(0, -1), folders => {
    const title = pipe(last, pascalCase)(folders);
    const type = pipe(slice(0, -1), _join('-'), pascalCase)(folders);
    const path = join(cwd, ...folders);

    return {
      title,
      type,
      path
    };
  });

  return createComponentFileStream(
    cwd,
    '**/+(atom|molecule|organism|template)/**/!(test|layout)/index.js'
  ).pipe(
    new Transform({
      objectMode: true,
      transform(chunk, encoding, callback) {
        callback(null, parseFilePath(chunk));
      }
    })
  );
};

module.exports = createComponentStream;

if (!module.parent) {
  const cwd = resolve(process.cwd(), process.argv.pop());
  createComponentStream(cwd)
    .pipe(
      new Transform({
        objectMode: true,
        transform(chunk, encoding, callback) {
          callback(null, `${JSON.stringify(chunk, null, 4)}\n`);
        }
      })
    )
    .pipe(process.stdout);
}
