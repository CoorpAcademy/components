import includes from 'lodash/fp/includes';
import reduce from 'lodash/fp/reduce';
import slidesData from './slides.data';
import * as ProgressionsService from './progressions';

const clueStore = reduce(
  (clueMap, slide) => clueMap.set(slide._id, slide.clue),
  new Map(),
  slidesData
);

// eslint-disable-next-line import/prefer-default-export
export const findById = async progressionId => {
  const progression = await ProgressionsService.findById(progressionId);
  const slideId = progression.state.nextContent.ref;

  if (!includes(slideId, progression.state.requestedClues))
    throw new Error('Clue is not available');
  if (!clueStore.has(slideId)) throw new Error('Clue not found');

  return clueStore.get(slideId);
};
