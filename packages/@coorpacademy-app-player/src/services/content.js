import reduce from 'lodash/fp/reduce';
import chaptersData from './chapters.data';
import levelsData from './levels.data';
import {findById} from './slides';

const toMap = reduce((map, object) => map.set(object._id, object), new Map());

const chapters = toMap(chaptersData);
const levels = toMap(levelsData);

// eslint-disable-next-line import/prefer-default-export
export const find = (type, ref) => {
  switch (type) {
    case 'chapter':
      if (chapters.has(ref)) return Promise.resolve(chapters.get(ref));
      return Promise.reject(new Error('Chapter not found'));

    case 'level':
      if (levels.has(ref)) return Promise.resolve(levels.get(ref));
      return Promise.reject(new Error('Level not found'));

    case 'slide':
      return findById(ref);

    default:
      return Promise.reject(new Error(`unknown content type ${type}`));
  }
};
