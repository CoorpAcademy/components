const {join, relative, dirname, basename} = require('path');
const {map} = require('rxjs/operators');
const {concat, of} = require('rxjs');
const {readComponentFixtures$} = require('./component-fixtures');
const {pascalCase} = require('./string');
const {readComponents$} = require('./components');

const generateNativeFixtures$ = (cwd, macro) =>
  readComponents$(cwd, {native: true}).pipe(
    map(({title, path, type}) => {
      const testPath = join(path, 'test');
      const fixtureTestPath = join(testPath, 'fixtures.native.ts');
      return [
        fixtureTestPath,
        concat(
          of(
            `/* eslint-disable prettier/prettier */`,
            `import test from 'ava';`,
            `import renderReactNativeComponentMacro from '${join(
              relative(testPath, dirname(macro)),
              basename(macro, '.js')
            )}';`,
            `import ${title} from '../index.native';`
          ),
          readComponentFixtures$({title, path, type}).pipe(
            map(
              ({fixture, fixturePath}) =>
                `import fixture${fixture} from './${
                  relative(testPath, fixturePath).split('.ts')[0]
                }';`
            )
          ),
          of(``),
          readComponentFixtures$({title, path, type}).pipe(
            map(
              ({fixture}) =>
                `test('${type} › ${title} › ${pascalCase(
                  fixture
                )} (Native) › should be rendered', renderReactNativeComponentMacro, ${title}, fixture${pascalCase(
                  fixture
                )});`
            )
          )
        )
      ];
    })
  );

module.exports.generateNativeFixtures$ = generateNativeFixtures$;
