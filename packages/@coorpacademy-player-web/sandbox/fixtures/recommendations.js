import {reduce, find as _find} from 'lodash/fp';

import levelsData from './data/levels';
import recommendations from './data/recommendations';

const levels = reduce((map, object) => map.set(object.ref, object), new Map(), levelsData);

const find = (type, ref) => {
  return Promise.resolve(recommendations);
};

const getNextLevel = ref => {
  const {name, level} = levels.get(ref);
  if (level === 'coach') {
    return Promise.resolve(undefined);
  }
  return Promise.resolve(
    _find(
      {
        name,
        level: level === 'base' ? 'advanced' : 'coach'
      },
      levelsData
    )
  );
};

export {find, getNextLevel};
