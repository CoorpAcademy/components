/*
 * > npm run init-component path/to/component
 *
 * Example :
 *
 * > npm run init-component -- atom/beautiful-input
 *
 * atom
 *   +  /beautiful-input
 *     +  /index.js (with BeautifulInput component)
 *     +  /style.css (with .default class)
 *     +  /test
 *     +    /fixtures
 *     +      /default.js (empty props)
*/

const path = require('path');
const {pascalCase} = require('change-case');
const {outputFile} = require('fs-extra');
const last = require('lodash/fp/last');
const mkdirp = require('mkdirp-promise');
const minimist = require('minimist');

const srcDir = () => path.join(__dirname, '..', 'src');
const baseName = baseDir => last(baseDir.split(path.sep));

const createBaseDir = async relativePath => {
  const baseDir = path.join(srcDir(), relativePath);

  await mkdirp(baseDir);
  return baseDir;
};

const writeComponentSource = baseDir => {
  const componentName = pascalCase(baseName(baseDir));
  const content = [
    `import React from 'react';`,
    `import style from './style.css';`,
    ``,
    `const ${componentName} = () => <div className={style.default}>TODO</div>;`,
    ``,
    `export default ${componentName};`,
    ``
  ].join('\n');

  return outputFile(path.join(baseDir, 'index.js'), content);
};

const writeStyleSource = baseDir => {
  const content = ['.default {}', ''].join('\n');

  return outputFile(path.join(baseDir, 'style.css'), content);
};

const writeDefaultFixture = async baseDir => {
  const fixturesDir = path.join(baseDir, 'test', 'fixtures');
  const content = ['export default {', '  props: {}', '};', ''].join('\n');

  await mkdirp(fixturesDir);

  return outputFile(path.join(fixturesDir, 'default.js'), content);
};

const initComponent = async ({relativePath}) => {
  const baseDir = await createBaseDir(relativePath);

  return Promise.all([
    writeComponentSource(baseDir),
    writeStyleSource(baseDir),
    writeDefaultFixture(baseDir)
  ]);
};

const runScript = async () => {
  const argv = minimist(process.argv.slice(2));
  const [relativePath] = argv._;

  await initComponent({relativePath});

  console.log(`Base component has been created into ${relativePath}`);
};

runScript();
