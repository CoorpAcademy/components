import reduce from 'lodash/fp/reduce';
import _find from 'lodash/fp/find';
import recommendations from './recommendations.data';
import levelsData from './levels.data';

const toMapByRef = reduce((map, object) => map.set(object.ref, object));
const levels = toMapByRef(new Map(), levelsData);

// eslint-disable-next-line import/prefer-default-export
export const find = (type, ref) => {
  switch (type) {
    case 'chapter':
      // TODO : flatten list structure
      return Promise.resolve({list: recommendations});
    case 'level':
      return Promise.resolve({list: recommendations});
  }
};

const getNextLevel = ref => {
  const {name, level} = levels.get(ref);
  if (level === 'coach') return Promise.resolve(null);
  const _nextLevel = level === 'base' ? 'advanced' : 'coach';
  const filter = {level: _nextLevel, name};
  const nextLevel = _find(filter, levelsData);
  return Promise.resolve(nextLevel);
};

export const getNext = (type, ref) => {
  switch (type) {
    case 'chapter':
      return Promise.resolve(null);
    case 'level':
      return getNextLevel(ref);
  }
};
