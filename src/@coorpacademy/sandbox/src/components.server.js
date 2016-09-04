import {join} from 'path';
import map from 'lodash/fp/map';
import pipe from 'lodash/fp/pipe';
import reduce from 'lodash/fp/reduce';
import replace from 'lodash/fp/replace';
import set from 'lodash/fp/set';
import glob from 'glob';

const cwd = join(__dirname, '../../components');

const components = glob.sync(
  '**/!(test)/index.js',
  {cwd}
);

const fixtures = glob.sync(
   '**/@(fixtures)/*.js',
  {cwd}
);

const FACTORY_REGEXP = /^(atom|molecule|organism|template\/app-catalog)\/([^\/]*)\/index\.js$/;
const buildFactory = files => acc =>
  pipe(
    map(
      file => FACTORY_REGEXP.exec(file)
    ),
    reduce(
      (acc, match) => {
        if (!match) return acc;
        const [file, category, name] = match;
        return set(`${formatCategory(category)}.${name}.factory`, require(join(cwd, file)).default, acc);
      }
    )(acc)
  )(files);

const FIXTURE_REGEXP = /^(atom|molecule|organism|template\/app-catalog)\/([^\/]*)\/test\/fixtures\/(.*)\.js$/;
const buildFixtures = files => acc =>
  pipe(
    map(
      file => FIXTURE_REGEXP.exec(file)
    ),
    reduce(
      (acc, match) => {
        if (!match) return acc;
        const [file, category, name, fixture] = match;
        return set(`${formatCategory(category)}.${name}.fixtures.${fixture}`, require(join(cwd, file)).default, acc);
      }
    )(acc)
  )(files);

const formatCategory = replace(/\//g, '-');

export default pipe(
  buildFactory(components),
  buildFixtures(fixtures)
)({});
