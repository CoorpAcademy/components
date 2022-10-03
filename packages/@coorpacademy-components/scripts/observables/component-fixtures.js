const {basename, dirname, join} = require('path');
const {map, concatMap} = require('rxjs/operators');
const pipe = require('lodash/fp/pipe');
const {readFixtureFiles$} = require('./fixture-files');
const {readComponents$} = require('./components');
const {pascalCase} = require('./string');

const readComponentFixtures$ = ({title, path, type}) =>
  readFixtureFiles$(join(path, 'test')).pipe(
    map(fixturePath => {
      const fixtureName = pipe(
        f => basename(f, '.js'),
        f => basename(f, '.ts'),
        f => basename(f, '.tsx')
      )(fixturePath);

      return {
        title,
        path,
        type,
        fixture: pascalCase(fixtureName),
        fixturePath: join(dirname(fixturePath), fixtureName)
      };
    })
  );

module.exports.readComponentFixtures$ = readComponentFixtures$;

if (!module.parent) {
  const {resolve} = require('path');
  const cwd = resolve(process.cwd(), process.argv.pop());
  readComponents$(cwd)
    .pipe(concatMap(readComponentFixtures$))
    .subscribe(line => console.log(line), console.error);
}
