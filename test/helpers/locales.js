const fs = require('fs');
const path = require('path');
const find = require('lodash/fp/find');
const pipe = require('lodash/fp/pipe');
const uniq = require('lodash/fp/uniq');
const remove = require('lodash/fp/remove');
const flatMap = require('lodash/fp/flatMap');
const mapValues = require('lodash/fp/mapValues');
const difference = require('lodash/fp/difference');
const estraverse = require('estraverse-fb');
const babelESLint = require('babel-eslint');

const forbiddenCharacters = /:/;
const interpolation = /\{\{([\s\S]+?)\}\}/;

function interpolate(str) {
  const value = interpolation.exec(str);
  if (!value) {
    return [];
  }
  return [value[1]].concat(interpolate(str.substring(value.index + value[0].length)));
}

estraverse.VisitorKeys.ExperimentalRestProperty = [];
estraverse.VisitorKeys.ExperimentalSpreadProperty = [];

function position(node) {
  return `${node.loc.start.line}:${node.loc.start.column}`;
}

const removeCount = remove(prop => prop === 'count');

function propertiesDifference(expected, gotten) {
  return difference(removeCount(expected), removeCount(gotten));
}

function assertDataIsValid(t, localesData, errorPrefix, key, dataArg) {
  const expectedFields = localesData[key];

  if (expectedFields.length === 0) {
    t.is(
      dataArg,
      undefined,
      `${errorPrefix} Expected no data passed to locale '${key}' that does not expect any`
    );
    return;
  }

  t.is(
    dataArg && dataArg.type,
    'ObjectExpression',
    `${errorPrefix} Expected data object literal as the second argument when translating '${key}'`
  );
  t.true(
    dataArg.properties.length > 0,
    `${errorPrefix} Expected at least one property in the data object literal when translating '${key}'`
  );
  const properties = dataArg.properties.map(prop => {
    t.true(
      prop.computed === false && prop.key.type === 'Identifier',
      `${errorPrefix} Expected property to be a simple Identifier`
    );
    return prop.key.name;
  });

  const missingFields = propertiesDifference(expectedFields, properties).join(', ');
  t.is(
    missingFields,
    '',
    `${errorPrefix} When translating '${key}', expected to receive properties: ${missingFields}`
  );

  const extraFields = propertiesDifference(properties, expectedFields).join(', ');
  t.is(
    extraFields,
    '',
    `${errorPrefix} When translating '${key}', extraneous fields were sent: ${extraFields}`
  );
}

function validateKey(t, locales, localesData, relativePath, key, node) {
  const keyPos = position(key);
  t.is(
    key.type,
    'Literal',
    `${relativePath}@${keyPos} Expected a literal as the argument for translate, but got ${key.type}`
  );

  t.truthy(locales[key.value], `${relativePath}@${keyPos} Unknown translation key '${key.value}'`);

  assertDataIsValid(
    t,
    localesData,
    `${relativePath}@${position(node)}`,
    key.value,
    node.arguments[1]
  );
}

function pushUsedKeys(usedKeys, arg, dataArg) {
  usedKeys.push(arg.value);
  if (dataArg && dataArg.properties) {
    if (find({key: {name: 'count'}}, dataArg.properties)) {
      usedKeys.push(`${arg.value}_none`);
      usedKeys.push(`${arg.value}_plural`);
    }
  }
}

const traverseFile = (t, locales, dirname) => {
  const localesData = mapValues(pipe(interpolate, uniq), locales);
  return file => {
    const fileContent = fs.readFileSync(file, 'utf8');
    const relativePath = path.relative(dirname, file);
    const ast = babelESLint.parse(fileContent);
    const usedKeys = [];

    estraverse.traverse(ast, {
      enter: node => {
        if (
          node.type === 'CallExpression' &&
          node.callee.type === 'Identifier' &&
          node.callee.name === 'translate'
        ) {
          const nbArguments = node.arguments.length;
          const nodePosition = position(node);

          t.true(
            nbArguments >= 1 && nbArguments <= 2,
            `${relativePath}@${nodePosition} Expected translate function to have 1 or 2 arguments, but got ${nbArguments}`
          );

          if (node.arguments[0].type === 'Literal') {
            validateKey(t, locales, localesData, relativePath, node.arguments[0], node);
            pushUsedKeys(usedKeys, node.arguments[0], node.arguments[1]);
          } else if (node.arguments[0].type === 'ConditionalExpression') {
            validateKey(t, locales, localesData, relativePath, node.arguments[0].consequent, node);
            validateKey(t, locales, localesData, relativePath, node.arguments[0].alternate, node);
            pushUsedKeys(usedKeys, node.arguments[0].consequent, node.arguments[1]);
            pushUsedKeys(usedKeys, node.arguments[0].alternate, node.arguments[1]);
          } else {
            t.fail(`${relativePath}@${nodePosition} Unexpected argument type for translate`);
          }
        }
      }
    });

    return usedKeys;
  };
};

const localesUseMacro = (t, dirname, files, locales) => {
  Object.keys(locales).forEach(key => {
    t.false(forbiddenCharacters.test(key), `Locale key ${key} contains forbidden characters.`);
  });

  const usedTranslationKeys = new Set(flatMap(traverseFile(t, locales, dirname), files));
  const unusedKeys = difference(Object.keys(locales), [...usedTranslationKeys]);

  t.deepEqual(unusedKeys, [], `Some keys were not used: ${unusedKeys.join(', ')}`);
};

module.exports = localesUseMacro;
