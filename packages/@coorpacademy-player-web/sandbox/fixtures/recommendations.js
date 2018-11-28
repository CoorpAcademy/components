import reduce from 'lodash/fp/reduce';
import _find from 'lodash/fp/find';

import levelsData from './data/levels';
import recommendations from './data/recommendations';

const levels = reduce((map, object) => map.set(object.ref, object), new Map(), levelsData);

const find = (type, ref) => {
  return Promise.resolve(recommendations);
};

const getNextLevel = ref => {
  const {name, level} = levels.get(ref);
  if (level === 'coach') {
    return undefined;
  }
  return _find(
    {
      name,
      level: level === 'base' ? 'advanced' : 'coach'
    },
    levelsData
  );
};

export {find, getNextLevel};
