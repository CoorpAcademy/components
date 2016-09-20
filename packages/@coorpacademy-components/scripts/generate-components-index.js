import join from 'lodash/fp/join';
import camelCase from 'lodash/fp/camelCase';
import last from 'lodash/fp/last';
import map from 'lodash/fp/map';
import pipe from 'lodash/fp/pipe';
import reverse from 'lodash/fp/reverse';
import slice from 'lodash/fp/slice';
import sortBy from 'lodash/fp/sortBy';
import split from 'lodash/fp/split';
import upperFirst from 'lodash/fp/upperFirst';

import components from './list-components';

const pascalCase = pipe(camelCase, upperFirst);

const _exports = pipe(
  map(
    pipe(
      split('/'),
      slice(0, -1),
      reverse
    )
  ),
  sortBy(0),
  map(reverse),
  map(folders => {
    const name = pipe(last, pascalCase)(folders);
    const path = join('/', folders);
    return `export create${name} from './${path}';`
  }),
  join('\n'),
  d => d + '\n'
)(components);

if (!module.parent)
  process.stdout.write(_exports);

export default _exports;
