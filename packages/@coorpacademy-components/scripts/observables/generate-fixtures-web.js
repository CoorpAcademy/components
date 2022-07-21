const {join, relative, dirname, basename} = require('path');
const {map} = require('rxjs/operators');
const {concat, of} = require('rxjs');
const {readComponentFixtures$} = require('./component-fixtures');
const {pascalCase} = require('./string');
const {readComponents$} = require('./components');

const generateWebFixtures$ = (cwd, macro) =>
  readComponents$(cwd).pipe(
    map(({title, path, type}) => {
      const testPath = join(path, 'test');
      const fixtureTestPath = join(testPath, 'fixtures.js');
      return [
        fixtureTestPath,
        concat(
          of(
            `/* eslint-disable prettier/prettier, lodash-fp/use-fp, import/extensions, node/file-extension-in-import */
`,
            `import test from 'ava';`,
            `import forEach from 'lodash/forEach';`,
            `import {renderComponent} from '${join(
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
            `test('${type} › ${title} › should have valid propTypes', t => {`,
            `  t.pass();`,
            `  t.truthy(${title}.propTypes);`,
            `  forEach(${title}.propTypes, (value, key) => {`,
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
                )} › should be rendered', renderComponent, ${title}, fixture${pascalCase(
                  fixture
                )});`
            )
          )
        )
      ];
    })
  );

module.exports.generateWebFixtures$ = generateWebFixtures$;
