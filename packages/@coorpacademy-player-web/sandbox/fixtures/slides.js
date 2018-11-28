import filter from 'lodash/fp/filter';
import map from 'lodash/fp/map';
import pipe from 'lodash/fp/pipe';
import reduce from 'lodash/fp/reduce';
import update from 'lodash/fp/update';

import slidesData from './data/slides';
import appendJWPOptions from './utils/jwp-options';

const slideStore = reduce(
  (slideMap, slide) => slideMap.set(slide._id, slide),
  new Map(),
  slidesData
);

const findByChapter = chapterRef => filter({chapter_id: chapterRef}, slidesData);

// eslint-disable-next-line import/prefer-default-export,require-await
const findById = async id => {
  if (!slideStore.has(id)) throw new Error(`Slide ${id} not found`);
  const slide = slideStore.get(id);
  return pipe(
    update('lessons', map(appendJWPOptions(''))),
    update('question.medias', map(appendJWPOptions('src.0.'))),
    update('context.media', appendJWPOptions('src.0.'))
  )(slide);
};

export {findById, findByChapter};
