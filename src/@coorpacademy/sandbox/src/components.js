// import {negate, includes, replace, startsWith, get, fromPairs, filter, map, pipe} from 'lodash/fp';
// import {buildFixture} from '../util/build-fixture';

// const req = require.context('../../components', true, /(atom|molecule|organism).*\.js$/);
// const files = req.keys();

// export const getComponent = component =>
//   req(`${component}/index.js`).default;

// export const getFixtures = (treant, options, component) => {
//   const FIXTURES_FOLDER = `${component}/test/fixtures`;
//   return files
//     .filter(startsWith(FIXTURES_FOLDER))
//     .map(req)
//     .map(get('default'))
//     .map(buildFixture(treant, options));
// };

// export const getComponents = (treant, options) =>
//   pipe(
//     filter(negate(includes('test'))),
//     map(
//       pipe(
//         replace(/\/index\.js$/, ''),
//         name => [name, {
//           name,
//           component: getComponent(name)(treant, options),
//           fixtures: getFixtures(treant, options, name)
//         }]
//       )
//     ),
//     fromPairs
//   )(req.keys());

import {join} from 'path';
import {pipe, map, reduce, has, set} from 'lodash/fp';
const FOLDER = '(atom|molecule|organism)/([^/]*)';

const components = require.context(
  '../../components',
  true,
  /^\.\/(atom|molecule|organism)\/([^\/]*)\/index\.js$/
);

const fixtures = require.context(
  '../../components',
  true,
  /^\.\/(atom|molecule|organism)\/([^\/]*)\/test\/fixtures\/(.*)\.js$/
);

const buildFactory = req => acc =>
  pipe(
    map(
      file => /^\.\/(atom|molecule|organism)\/([^\/]*)\/index\.js$/.exec(file)
    ),
    reduce(
      (acc, [file, category, name]) =>
        set(`${category}.${name}.factory`, req(file).default, acc)
    )(acc)
  )(req.keys());

const buildFixtures = req => acc =>
  pipe(
    map(
      file => /^\.\/(atom|molecule|organism)\/([^\/]*)\/test\/fixtures\/(.*)\.js$/.exec(file)
    ),
    reduce(
      (acc, [file, category, name, fixture]) =>
        set(`${category}.${name}.fixtures.${fixture}`, req(file).default, acc)
    )(acc)
  )(req.keys());

export default pipe(
  buildFactory(components),
  buildFixtures(fixtures)
)({});
