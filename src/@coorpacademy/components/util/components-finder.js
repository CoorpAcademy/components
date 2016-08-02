const glob = require('glob');
const path = require('path');
const pascalCase = require('pascal-case');

const fixtures = componentPath => {
  const fixturesPath = `../${componentPath}/test/fixtures/*.js`;
  const fixturesFiles = glob.sync(path.join(__dirname, fixturesPath));

  const fixtures = fixturesFiles.map(function(file) {
    const splinters = file.split('/');
    const fixture = splinters[splinters.length - 1];
    return {
      path: `./${path.join(componentPath, 'test/fixtures', fixture)}`,
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

const extractPaths = (paths, skipFixtures) => {
  const files = glob.sync(path.join(__dirname, paths));

  const elements = files.map(function(file) {
    const indexFrom = file.lastIndexOf('/components');
    const _path = file.substr(indexFrom + 11);
    const splinters = _path.split('/');
    const type = splinters[1];
    const component = splinters[splinters.length - 2];
    const name = pascalCase(component);
    const componentPath = _path.substring(0, _path.length - 8);

    return {
      type,
      name,
      factory: factoryName(type, name),
      path: `.${componentPath}`,
      fixtures: !skipFixtures && fixtures(componentPath)
    };
  });

  return elements;
};

// const writeExports = elements => {
//   const factories = elements.map(element => element.factory);
//   return `  ${factories.join(',\n  ')}`;
// };

// const writeImports = elements => {
//   const lines = elements.map(e => `import ${e.factory} from '${e.path}'`);
//   return `${lines.join(';\n')};`;
// };

const extractAllComponents = () => {
  return extractComponents('{atom,behaviour,molecule,organism}', false);
};

const extractComponents = (includes, skipFixtures) => {
  const paths = `../${includes}/**/index.js`;
  return extractPaths(paths, skipFixtures);
};

export {
  // writeImports,
  // writeExports,
  extractComponents,
  extractAllComponents,
  extractPaths
};
