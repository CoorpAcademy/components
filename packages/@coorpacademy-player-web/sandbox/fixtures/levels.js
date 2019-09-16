import get from 'lodash/fp/get';
import pipe from 'lodash/fp/pipe';
import reduce from 'lodash/fp/reduce';
import values from 'lodash/fp/values';

import levelsData from './data/levels';

const mayBy = key =>
  pipe(
    values,
    reduce((map, object) => map.set(get(key, object), object), new Map())
  );

const toMapByRef = mayBy('ref');

const levels = toMapByRef(levelsData);

const findById = ref => Promise.resolve(levels.get(ref));

// eslint-disable-next-line import/prefer-default-export
export {findById};
