import getOr from 'lodash/fp/getOr';
import get from 'lodash/fp/get';

export const getChoices = slide => get('question.content.choices')(slide);
export const getProgressionId = state => getOr(null, 'ui.current.progressionId')(state);
export const questionType = get('question.type');

export const getProgression = state => {
  const entities = getOr({}, 'data.progressions.entities')(state);
  const currentId = getProgressionId(state);
  return getOr({}, currentId)(entities);
};

export const getSlide = (progression, state) => {
  const entities = getOr({}, 'data.slides.entities')(state);
  const ref = getOr(null, 'content.ref')(progression);
  return getOr({}, ref)(entities);
};
