const {Transform} = require('stream');
const {resolve, join, dirname, basename} = require('path');
const _join = require('lodash/fp/join');
const camelCase = require('lodash/fp/camelCase');
const last = require('lodash/fp/last');
const pipe = require('lodash/fp/pipe');
const slice = require('lodash/fp/slice');
const split = require('lodash/fp/split');
const upperFirst = require('lodash/fp/upperFirst');
const createComponentFileStream = require('./component-files');

const pascalCase = pipe(camelCase, upperFirst);
const removeExt = path => join(dirname(path), basename(path, '.js'));

const createComponentFixturesStream = componentDir => {
  const parseFilePath = pipe(split('/'), folders => {
    const fixture = pipe(last, removeExt, pascalCase)(folders);
    const title = pipe(slice(0, -3), last, pascalCase)(folders);
    const type = pipe(slice(0, -4), _join('-'), pascalCase)(folders);
    const path = join(componentDir, ...folders);

    return {
      fixture,
      title,
      type,
      path
    };
  });

  return createComponentFileStream(
    componentDir,
    '**/+(atom|molecule|organism|template)/**/test/fixtures/*.js'
  ).pipe(
    new Transform({
      objectMode: true,
      transform(chunk, encoding, callback) {
        callback(null, parseFilePath(chunk));
      }
    })
  );
};

module.exports = createComponentFixturesStream;

if (!module.parent) {
  const componentDir = resolve(process.cwd(), process.argv.pop());
  createComponentFixturesStream(componentDir)
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
