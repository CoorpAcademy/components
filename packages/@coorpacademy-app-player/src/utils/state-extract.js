import getOr from 'lodash/fp/getOr';
import get from 'lodash/fp/get';

export const getChoices = get('question.content.choices');
export const getProgressionId = getOr(null, 'ui.current.progressionId');
export const getQuestionType = get('question.type');

export const getProgression = id => state => {
  return getOr({}, ['data', 'progressions', 'entities', id], state);
};

export const getCurrentProgression = state => {
  const currentId = getProgressionId(state);
  return getProgression(currentId)(state);
};

export const getAnswers = state => {
  const progressionId = getProgressionId(state);
  return getOr([], ['ui', 'answers', progressionId])(state);
};

export const getSlide = state => {
  const entities = getOr({}, 'data.slides.entities')(state);
  const id = getOr(null, 'state.nextContent.ref')(getCurrentProgression(state));
  return getOr({}, id)(entities);
};
