import map from 'lodash/fp/map';
import pipe from 'lodash/fp/pipe';
import reduce from 'lodash/fp/reduce';
import replace from 'lodash/fp/replace';
import set from 'lodash/fp/set';

const components = require.context(
  '../../components',
  true,
  /^\.\/(atom|molecule|organism|template\/app-catalog)\/([^\/]*)\/index\.js$/
);

const fixtures = require.context(
  '../../components',
  true,
  /^\.\/(atom|molecule|organism|template\/app-catalog)\/([^\/]*)\/test\/fixtures\/(.*)\.js$/
);

const buildFactory = req => acc =>
  pipe(
    map(
      file => /^\.\/(atom|molecule|organism|template\/app-catalog)\/([^\/]*)\/index\.js$/.exec(file)
    ),
    reduce(
      (acc, [file, category, name]) =>
        set(`${formatCategory(category)}.${name}.factory`, req(file).default, acc)
    )(acc)
  )(req.keys());

const buildFixtures = req => acc =>
  pipe(
    map(
      file => /^\.\/(atom|molecule|organism|template\/app-catalog)\/([^\/]*)\/test\/fixtures\/(.*)\.js$/.exec(file)
    ),
    reduce(
      (acc, [file, category, name, fixture]) =>
        set(`${formatCategory(category)}.${name}.fixtures.${fixture}`, req(file).default, acc)
    )(acc)
  )(req.keys());

const formatCategory = replace(/\//g, '-');

export default pipe(
  buildFactory(components),
  buildFixtures(fixtures)
)({});
