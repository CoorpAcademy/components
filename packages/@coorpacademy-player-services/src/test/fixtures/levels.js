// @flow strict

import get from 'lodash/fp/get';
import pipe from 'lodash/fp/pipe';
import reduce from 'lodash/fp/reduce';
import values from 'lodash/fp/values';

import type {LevelAPI} from '../../definitions';
import levelsData from './data/levels';

const mayBy = key =>
  // $FlowFixMe (typing postponed for this section)
  pipe(
    values,
    reduce((map, object) => map.set(get(key, object), object), new Map())
  );

const toMapByRef = mayBy('ref');

const levels = toMapByRef(levelsData);

const findById = (ref: string): LevelAPI | void => levels.get(ref);

export {findById};
