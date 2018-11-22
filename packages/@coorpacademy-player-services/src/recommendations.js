import reduce from 'lodash/fp/reduce';
import _find from 'lodash/fp/find';
import recommendations from './fixtures/recommendations';
import levelsData from './fixtures/levels';

const levels = reduce((map, object) => map.set(object.ref, object), new Map(), levelsData);

export const find = (type, ref) => {
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

export const getNext = (type, ref) => {
  switch (type) {
    case 'chapter':
      return Promise.resolve(undefined);
    case 'level':
      return Promise.resolve(getNextLevel(ref));
  }
};
