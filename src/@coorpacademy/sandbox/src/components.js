import {join} from 'path';
import {pipe, replace, map, reduce, has, set} from 'lodash/fp';
const FOLDER = '(atom|molecule|organism|template/app-catalog)/([^/]*)';

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
