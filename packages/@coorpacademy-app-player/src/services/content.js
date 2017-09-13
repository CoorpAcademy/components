import reduce from 'lodash/fp/reduce';
import chaptersData from './chapters.data';
import {findById} from './slides';

const chapters = reduce(
  (chapterMap, chapter) => chapterMap.set(chapter._id, chapter),
  new Map(),
  chaptersData
);

export const find = (type, ref) => {
  switch (type) {
    case 'chapter':
      if (chapters.has(ref)) return Promise.resolve(chapters.get(ref));
      return Promise.reject(new Error('Chapter not found'));

    case 'level':
      return {content: 'level-plop'};

    case 'slide':
      return findById(ref);

    default:
      return Promise.reject(new Error(`unknown content type ${type}`));
  }
};

export const findAll = () => {
  return Promise.resolve(Array.from(chapters.values()));
};
