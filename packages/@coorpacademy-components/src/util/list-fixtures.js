import {join, basename} from 'path';
import glob from 'glob';
import _join from 'lodash/fp/join';
import camelCase from 'lodash/fp/camelCase';
import last from 'lodash/fp/last';
import map from 'lodash/fp/map';
import pipe from 'lodash/fp/pipe';
import slice from 'lodash/fp/slice';
import split from 'lodash/fp/split';
import set from 'lodash/fp/set';
import reduce from 'lodash/fp/reduce';
import upperFirst from 'lodash/fp/upperFirst';

const pascalCase = pipe(camelCase, upperFirst);

const cwd = join(__dirname, '..');

const paths = glob.sync(
  '**/fixtures/*.js',
  {cwd}
);

const removeExt = filename => basename(filename, '.js');

export default pipe(
  map(
    pipe(
      split('/'),
      folders => {
        const type = pipe(slice(0, -4), _join('-'), pascalCase)(folders);
        const title = pipe(slice(slice(0, -4, folders).length, -3), _join('-'), pascalCase)(folders);
        const fixture = pipe(last, removeExt, pascalCase)(folders);
        const path = join(__dirname, '..', ...folders);

        return {
          title,
          type,
          fixture,
          path
        };
      }
    )
  ),
  reduce((acc, {title, type, fixture, path}) => set([type, title, fixture], path, acc), {})
)(paths);
