import {get, pipe, reduce, values} from 'lodash/fp';

import levelsData from './data/levels';

const mayBy = key =>
  pipe(
    values,
    reduce((map, object) => map.set(get(key, object), object), new Map())
  );

const toMapByRef = mayBy('ref');

const levels = toMapByRef(levelsData);

const findById = ref => Promise.resolve(levels.get(ref));

export {findById};
