import getOr from 'lodash/fp/getOr';
import get from 'lodash/fp/get';

export const getChoices = get('question.content.choices');
export const getProgressionId = getOr(null, 'ui.current.progressionId');
export const getQuestionType = get('question.type');

export const getProgression = state => {
  const entities = getOr({}, 'data.progressions.entities')(state);
  const currentId = getProgressionId(state);
  return getOr({}, currentId)(entities);
};

export const getSlide = state => {
  const entities = getOr({}, 'data.slides.entities')(state);
  const id = getOr(null, 'state.nextContent.ref')(getProgression(state));
  return getOr({}, id)(entities);
};
