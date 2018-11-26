// @flow

import filter from 'lodash/fp/filter';
import reduce from 'lodash/fp/reduce';
import slidesData from './data/slides';

const slideStore = reduce(
  (slideMap, slide) => slideMap.set(slide._id, slide),
  new Map(),
  slidesData
);

const findByChapter = (chapterRef: string) => filter({chapter_id: chapterRef}, slidesData);
const findById = slideStore.get;

export {findById, findByChapter};
