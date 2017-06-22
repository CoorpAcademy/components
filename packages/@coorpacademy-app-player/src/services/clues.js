import includes from 'lodash/fp/includes';
import map from 'lodash/fp/map';
import pipe from 'lodash/fp/pipe';
import reduce from 'lodash/fp/reduce';
import pick from 'lodash/fp/pick';
import slidesData from './slides.data';
import * as ProgressionsService from './progressions';

const clueStore = pipe(
  map(pick(['_id', 'clue'])),
  reduce((clueMap, slide) => clueMap.set(slide._id, slide.clue), new Map())
)(slidesData);

// eslint-disable-next-line import/prefer-default-export
export const findById = async progressionId => {
  const progression = await ProgressionsService.findById(progressionId);
  const slideId = progression.state.nextContent.ref;

  if (!includes(slideId, progression.state.requestedClues))
    throw new Error('Clue are not available');
  if (!clueStore.has(slideId)) throw new Error('Clue not found');

  return clueStore.get(slideId);
};
