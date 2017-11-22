const {basename, dirname, join} = require('path');
const pipe = require('lodash/fp/pipe');
const {readFixtureFiles$} = require('./fixture-files');
const {pascalCase} = require('./string');

const readComponentFixtures$ = ({title, path, type}) =>
  readFixtureFiles$(join(path, 'test')).map(fixturePath => {
    const fixture = pipe(f => basename(f, '.js'), pascalCase)(fixturePath);
    return {
      title,
      path,
      type,
      fixture,
      fixturePath: join(dirname(fixturePath), basename(fixturePath, '.js'))
    };
  });

module.exports.readComponentFixtures$ = readComponentFixtures$;

if (!module.parent) {
  const {resolve} = require('path');
  const cwd = resolve(process.cwd(), process.argv.pop());
  readComponentFixtures$(cwd).subscribe(line => console.log(line), console.error);
}
