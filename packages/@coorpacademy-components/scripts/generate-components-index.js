import {relative, join} from 'path';
import _join from 'lodash/fp/join';
import sortBy from 'lodash/fp/sortBy';
import map from 'lodash/fp/map';
import pipe from 'lodash/fp/pipe';
import reduce from 'lodash/fp/reduce';
import assign from 'lodash/fp/assign';
import values from 'lodash/fp/values';
import mapValues from 'lodash/fp/mapValues';
import toPairs from 'lodash/fp/toPairs';
import components from './list-components';

const targetDir = join(__dirname, '../src');

const _exports = pipe(
  values,
  reduce(assign, {}),
  mapValues(path => relative(targetDir, path)),
  toPairs,
  sortBy(0),
  map(([_name, path]) => `export create${_name} from './${path}';`),
  _join('\n'),
  d => `${d}
`
)(components);

if (!module.parent)
  process.stdout.write(_exports);

export default _exports;
