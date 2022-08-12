const {basename, dirname, join} = require('path');
const {map, concatMap} = require('rxjs/operators');
const pipe = require('lodash/fp/pipe');
const {readFixtureFiles$} = require('./fixture-files');
const {readComponents$} = require('./components');
const {pascalCase} = require('./string');

const readComponentFixtures$ = ({title, path, type}, {native} = {native: false}) =>
  readFixtureFiles$(join(path, 'test')).pipe(
    map(fixturePath => {
      const fixture = pipe(f => basename(f, native ? '.tsx' : '.js'), pascalCase)(fixturePath);
      return {
        title,
        path,
        type,
        fixture,
        fixturePath: join(dirname(fixturePath), basename(fixturePath, native ? '.tsx' : '.js'))
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
