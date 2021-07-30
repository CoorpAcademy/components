import {reduce} from 'lodash/fp';

import slidesData from './data/slides';

const clueStore = reduce(
  (clueMap, slide) => clueMap.set(slide._id, slide.clue),
  new Map(),
  slidesData
);

const getClue = slideId => {
  if (!clueStore.has(slideId)) throw new Error('Clue not found');
  return clueStore.get(slideId);
};

export {getClue};
