import get from 'lodash/fp/get';
import head from 'lodash/fp/head';
import includes from 'lodash/fp/includes';
import reduce from 'lodash/fp/reduce';
import slidesData from './slides.data';
import * as ProgressionsService from './progressions';

const answerStore = reduce(
  (clueMap, slide) => clueMap.set(slide._id, head(slide.question.content.answers)),
  new Map(),
  slidesData
);

// eslint-disable-next-line import/prefer-default-export
export const findById = async progressionId => {
  const progression = await ProgressionsService.findById(progressionId);
  const slideId = get('state.content.ref', progression);

  if (!includes(slideId, progression.state.slides)) throw new Error('Answers are not available');

  if (!answerStore.has(slideId)) throw new Error('Answers not found');

  return answerStore.get(slideId);
};
