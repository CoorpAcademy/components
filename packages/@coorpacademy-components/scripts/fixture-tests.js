const {relative, join, dirname, basename} = require('path');
const {createWriteStream} = require('fs');
const {Observable} = require('rxjs/Observable');
const {readComponents$} = require('./observables/components');
const {readComponentFixtures$} = require('./observables/component-fixtures');
const {pascalCase} = require('./observables/string');

const readFixtureTests$ = (cwd, macro) =>
  readComponents$(cwd).map(({title, path, type}) => {
    const testPath = join(path, 'test');
    const fixtureTestPath = join(testPath, 'fixtures.js');
    return [
      fixtureTestPath,
      Observable.concat(
        Observable.of(
          `import test from 'ava';`,
          `import _ from 'lodash';`,
          `import renderComponentMacro from '${join(
            relative(testPath, dirname(macro)),
            basename(macro, '.js')
          )}';`,
          `import ${title} from '..';`
        ),
        readComponentFixtures$({title, path, type}).map(
          ({fixture, fixturePath}) =>
            `import fixture${fixture} from './${relative(testPath, fixturePath)}';`
        ),
        Observable.of(
          ``,
          `test('${type} › ${title} > should have valid propTypes', t => {`,
          `  t.pass();`,
          `  _.forEach(${title}.propTypes, (value, key) => {`,
          `    t.not(value, undefined, \`PropType for "${type}.${title}.propTypes.$\{key}" may not be undefined. Did you mistype the propTypes definition?\`);`,
          `  });`,
          `});`,
          ``
        ),
        readComponentFixtures$({title, path, type}).map(
          ({fixture}) =>
            `test('${type} › ${title} › ${pascalCase(
              fixture
            )} › should be rendered', renderComponentMacro, ${title}, fixture${pascalCase(
              fixture
            )});`
        )
      )
    ];
  });

module.exports.readFixtureTests$ = readFixtureTests$;

if (!module.parent) {
  const {resolve} = require('path');
  const macro = resolve(process.cwd(), process.argv.pop());
  const cwd = resolve(process.cwd(), process.argv.pop());
  readFixtureTests$(cwd, macro)
    .map(([path, content$]) =>
      Observable.create(observer => {
        const writer = createWriteStream(path, {encoding: 'utf8'});
        const write = Observable.bindNodeCallback((line, cb) =>
          writer.write(`${line}\n`, 'utf8', cb)
        );

        content$.concatMap(line => write(line)).subscribe(
          () => {},
          err => observer.error(err),
          () => {
            writer.end(() => observer.complete());
          }
        );
      })
    )
    .mergeAll()
    .subscribe(() => {}, console.error);
}
