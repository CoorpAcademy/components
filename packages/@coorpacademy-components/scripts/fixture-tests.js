const {relative, join, dirname, basename} = require('path');
const {createWriteStream} = require('fs');
const {Observable, concat, of, bindNodeCallback} = require('rxjs');
const {map, mergeAll, concatMap} = require('rxjs/operators');
const {readComponents$} = require('./observables/components');
const {readComponentFixtures$} = require('./observables/component-fixtures');
const {pascalCase} = require('./observables/string');

const readFixtureTests$ = (cwd, macro) =>
  readComponents$(cwd).pipe(
    map(({title, path, type}) => {
      const testPath = join(path, 'test');
      const fixtureTestPath = join(testPath, 'fixtures.js');
      return [
        fixtureTestPath,
        concat(
          of(
            `import test from 'ava';`,
            `import _ from 'lodash';`,
            `import renderComponentMacro from '${join(
              relative(testPath, dirname(macro)),
              basename(macro, '.js')
            )}';`,
            `import ${title} from '..';`
          ),
          readComponentFixtures$({title, path, type}).pipe(
            map(
              ({fixture, fixturePath}) =>
                `import fixture${fixture} from './${relative(testPath, fixturePath)}';`
            )
          ),
          of(
            ``,
            `test('${type} › ${title} > should have valid propTypes', t => {`,
            `  t.pass();`,
            `  _.forEach(${title}.propTypes, (value, key) => {`,
            `    t.not(value, undefined, \`PropType for "${type}.${title}.propTypes.$\{key}" may not be undefined. Did you mistype the propTypes definition?\`);`,
            `  });`,
            `});`,
            ``
          ),
          readComponentFixtures$({title, path, type}).pipe(
            map(
              ({fixture}) =>
                `test('${type} › ${title} › ${pascalCase(
                  fixture
                )} › should be rendered', renderComponentMacro, ${title}, fixture${pascalCase(
                  fixture
                )});`
            )
          )
        )
      ];
    })
  );

module.exports.readFixtureTests$ = readFixtureTests$;

if (!module.parent) {
  const {resolve} = require('path');
  const macro = resolve(process.cwd(), process.argv.pop());
  const cwd = resolve(process.cwd(), process.argv.pop());
  readFixtureTests$(cwd, macro)
    .pipe(
      map(([path, content$]) =>
        Observable.create(observer => {
          const writer = createWriteStream(path, {encoding: 'utf8'});
          const write = bindNodeCallback((line, cb) => writer.write(`${line}\n`, 'utf8', cb));

          content$.pipe(concatMap(line => write(line))).subscribe(
            () => {},
            err => observer.error(err),
            () => {
              writer.end(() => observer.complete());
            }
          );
        })
      ),
      mergeAll()
    )
    .subscribe(() => {}, console.error);
}
