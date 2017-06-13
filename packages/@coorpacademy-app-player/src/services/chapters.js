import reduce from 'lodash/fp/reduce';
import chaptersData from './chapters.data';

const chapters = reduce(
  (chapterMap, chapter) => chapterMap.set(chapter._id, chapter),
  new Map(),
  chaptersData
);

export const findById = id => {
  if (chapters.has(id)) return Promise.resolve(chapters.get(id));
  return Promise.reject(new Error('Chapter not found'));
};

export const findAll = () => {
  return Promise.resolve(Array.from(chapters.values()));
};
