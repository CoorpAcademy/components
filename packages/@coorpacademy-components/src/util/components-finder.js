import glob from 'glob';
import {join} from 'path';
import camelCase from 'lodash/fp/camelCase';
import upperFirst from 'lodash/fp/upperFirst';
import _join from 'lodash/fp/join';
import pipe from 'lodash/fp/pipe';
import slice from 'lodash/fp/slice';

const pascalCase = pipe(camelCase, upperFirst);

const fixtures = componentPath => {
  const fixturesPath = `./${componentPath}/test/fixtures/*.js`;
  const fixturesFiles = glob.sync(fixturesPath, {cwd: join(__dirname, '..')});

  const fixtures = fixturesFiles.map(function(file) {
    const splinters = file.split('/');
    const fixture = splinters[splinters.length - 1];
    return {
      path: `${join(componentPath, 'test/fixtures', fixture)}`,
      name: fixture
    };
  });

  return fixtures;
};

const factoryName = (type, name) => {
  if (type === 'behaviour') {
    return `${name}Behaviour`;
  }
  else {
    return `create${name}`;
  }
};

export const extractPaths = (paths, skipFixtures) => {
  const files = glob.sync(paths, {cwd: join(__dirname, '..')});

  const elements = files.map(function(file) {
    const splinters = file.split('/');
    const type = splinters[0];
    const component = splinters[splinters.length - 2];
    const name = pascalCase(component);
    const componentPath = pipe(
      slice(0, -1),
      _join('/')
    )(splinters);

    return {
      type,
      name,
      factory: factoryName(type, name),
      path: `${componentPath}`,
      fixtures: !skipFixtures && fixtures(componentPath)
    };
  });

  return elements;
};

export const extractAllComponents = () => {
  return extractComponents('{atom,behaviour,molecule,organism,template}', false);
};

export const extractComponents = (includes, skipFixtures) => {
  const paths = `${includes}/**/index.js`;
  return extractPaths(paths, skipFixtures);
};
