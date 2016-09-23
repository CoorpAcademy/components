import {join} from 'path';
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
  '**/!(test)/index.js',
  {cwd}
);

export default pipe(
  map(
    pipe(
      split('/'),
      slice(0, -1),
      folders => {
        const title = pipe(last, pascalCase)(folders);
        const type = pipe(slice(0, -1), _join('-'), pascalCase)(folders);
        const path = join(__dirname, '..', ...folders);

        return {
          title,
          type,
          path
        };
      }
    )
  ),
  reduce((acc, {title, type, path}) => set([type, title], path, acc), {})
)(paths);
