const fs = require('fs');
const path = require('path');
const Promise = require('bluebird');
const flatMap = require('lodash/fp/flatMap');
const fixtures = require('../src/util/list-fixtures').default;
const components = require('../src/util/list-components').default;

const writeFile = Promise.promisify(fs.writeFile);

function generateTestFile(type, filePath, compName, compFixtures) {
  const pathToRenderComponent = path.relative(
    path.dirname(filePath),
    path.join(__dirname, '../src/test/helpers/render-component')
  );
  const fixtureImports = Object.keys(compFixtures)
    .map(key => `import fixture${key} from './fixtures/${path.parse(compFixtures[key]).name}';`)
    .join('\n');

  const fixtureTests = Object.keys(compFixtures)
    .map(
      key =>
        `test('${type} › ${compName} › ${key} › should be rendered', renderComponentMacro, ${compName}, fixture${key});`
    )
    .join('\n')
    .trim();

  return `import test from 'ava';
import renderComponentMacro from '${pathToRenderComponent}';
import ${compName} from '..';
${fixtureImports}

${fixtureTests}`;
}

function generateTests() {
  const things = flatMap(type => {
    return flatMap(compName => {
      const filePath = path.join(components[type][compName], './test/fixtures.js');
      const content = generateTestFile(type, filePath, compName, fixtures[type][compName]);
      return writeFile(filePath, content);
    }, Object.keys(fixtures[type]));
  }, Object.keys(fixtures));

  return Promise.all(things);
}

generateTests().catch(err => {
  console.error(err);
  process.exit(1); // eslint-disable-line unicorn/no-process-exit
});
