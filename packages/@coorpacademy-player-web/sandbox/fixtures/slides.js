import {filter, map, pipe, reduce, update} from 'lodash/fp';

import slidesData from './data/slides';
import appendJWPOptions from './utils/jwp-options';

const slideStore = reduce(
  (slideMap, slide) => slideMap.set(slide._id, slide),
  new Map(),
  slidesData
);

const findByChapter = chapterRef => Promise.resolve(filter({chapter_id: chapterRef}, slidesData));

// eslint-disable-next-line require-await
const findById = async id => {
  if (!slideStore.has(id)) return Promise.reject(new Error(`Slide ${id} not found`));
  const slide = slideStore.get(id);
  return Promise.resolve(
    pipe(
      update('lessons', map(appendJWPOptions(''))),
      update('question.medias', map(appendJWPOptions('src.0.'))),
      update('context.media', appendJWPOptions('src.0.'))
    )(slide)
  );
};

export {findById, findByChapter};
