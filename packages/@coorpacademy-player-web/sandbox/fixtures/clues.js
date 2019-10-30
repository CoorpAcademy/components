import reduce from 'lodash/fp/reduce';

import slidesData from './data/slides';

const clueStore = reduce(
  (clueMap, slide) => clueMap.set(slide._id, slide.clue),
  new Map(),
  slidesData
);

const getClue = slideId => {
  if (!clueStore.has(slideId)) return Promise.reject(new Error('Clue not found'));
  return Promise.resolve(clueStore.get(slideId));
};

export {getClue};
