import get from 'lodash/fp/get';

export const getChoices = get('question.content.choices');
export const getProgressionId = get('ui.current.progressionId');
export const getQuestionType = get('question.type');

export const getProgression = id => state => {
  return get(['data', 'progressions', 'entities', id], state);
};

export const getCurrentProgression = state => {
  const id = getProgressionId(state);
  return getProgression(id)(state);
};

export const getAnswers = state => {
  const progressionId = getProgressionId(state);
  return get(['ui', 'answers', progressionId])(state);
};

export const getSlide = id => state => {
  const entities = get('data.slides.entities')(state);
  return get(id)(entities);
};

export const getCurrentSlide = state => {
  const id = get('state.nextContent.ref')(getCurrentProgression(state));
  return getSlide(id)(state);
};

export const getExitNode = id => state => {
  const entities = get('data.exitnodes.entities')(state);
  return get(id)(entities);
};

export const getCurrentExitNode = state => {
  const id = get('state.nextContent.ref')(getCurrentProgression(state));
  return getSlide(id)(state);
};
