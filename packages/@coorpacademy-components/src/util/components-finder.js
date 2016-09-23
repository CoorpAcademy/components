import {join} from 'path';
import glob from 'glob';
import camelCase from 'lodash/fp/camelCase';
import upperFirst from 'lodash/fp/upperFirst';
import _join from 'lodash/fp/join';
import pipe from 'lodash/fp/pipe';
import slice from 'lodash/fp/slice';

const pascalCase = pipe(camelCase, upperFirst);

const extractAllFixtures = componentPath => {
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

const getFactoryName = (type, _name) => {
  if (type === 'behaviour') {
    return `${_name}Behaviour`;
  }
  else {
    return `create${_name}`;
  }
};

export const extractPaths = (paths, skipFixtures) => {
  const files = glob.sync(paths, {cwd: join(__dirname, '..')});

  const elements = files.map(function(file) {
    const splinters = file.split('/');
    const type = splinters[0];
    const component = splinters[splinters.length - 2];
    const _name = pascalCase(component);
    const componentPath = pipe(
      slice(0, -1),
      _join('/')
    )(splinters);

    return {
      type,
      name: _name,
      factory: getFactoryName(type, _name),
      path: `${componentPath}`,
      fixtures: !skipFixtures && extractAllFixtures(componentPath)
    };
  });

  return elements;
};

export const extractComponents = (includes, skipFixtures) => {
  const paths = `${includes}/**/index.js`;
  return extractPaths(paths, skipFixtures);
};

export const extractAllComponents = () => {
  return extractComponents('{atom,behaviour,molecule,organism,template}', false);
};
