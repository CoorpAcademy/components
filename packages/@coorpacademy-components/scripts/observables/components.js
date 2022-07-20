const {relative, join} = require('path');
const pipe = require('lodash/fp/pipe');
const last = require('lodash/fp/last');
const _join = require('lodash/fp/join');
const slice = require('lodash/fp/slice');
const split = require('lodash/fp/split');
const {map} = require('rxjs/operators');
const {pascalCase} = require('./string');
const {readComponentFiles$} = require('./component-files');

const parse = cwd =>
  pipe(
    file => relative(cwd, file),
    split('/'),
    slice(0, -1),
    folders => {
      const type = pipe(slice(0, -1), _join('-'), pascalCase)(folders);
      const title = `${type}${pipe(last, pascalCase)(folders)}`;
      const path = join(cwd, ...folders);

      return {
        title,
        type,
        path
      };
    }
  );

const readComponents$ = (cwd, options) => readComponentFiles$(cwd, options).pipe(map(parse(cwd)));

module.exports.readComponents$ = readComponents$;

if (!module.parent) {
  const {resolve} = require('path');
  const cwd = resolve(process.cwd(), process.argv.pop());
  readComponents$(cwd).subscribe(line => console.log(line), console.error);
}
