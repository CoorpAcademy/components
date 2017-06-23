import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import pipe from 'lodash/fp/pipe';

export const getChoices = get('question.content.choices');
export const getCurrentProgressionId = get('ui.current.progressionId');
export const getQuestionType = get('question.type');

export const getProgression = id => state => {
  return get(['data', 'progressions', 'entities', id], state);
};

export const getCurrentProgression = state => {
  const id = getCurrentProgressionId(state);
  return getProgression(id)(state);
};

export const getAnswers = state => {
  const progressionId = getCurrentProgressionId(state);
  return getOr({}, ['ui', 'answers', progressionId])(state);
};

export const getAnswerValues = pipe(getAnswers, get('value'));

export const getSlide = id => state => {
  const entities = get('data.slides.entities')(state);
  return get(id)(entities);
};

export const getCurrentSlide = state => {
  const id = get('state.nextContent.ref')(getCurrentProgression(state));
  return getSlide(id)(state);
};

export const getPreviousSlide = state => {
  const id = get('state.content.ref')(getCurrentProgression(state));
  return getSlide(id)(state);
};

export const getExitNode = ref => state => {
  const entities = get('data.exitNodes.entities')(state);
  return get(ref)(entities);
};

export const getCurrentExitNode = state => {
  const ref = get('state.nextContent.ref')(getCurrentProgression(state));
  return getExitNode(ref)(state);
};

const getId = get('_id');
export const getCorrection = state => {
  const progression = getCurrentProgression(state);
  const slide = getPreviousSlide(state);

  return get(['data', 'answers', 'entities', getId(progression), getId(slide)], state);
};

export const getRoute = state => {
  const progression = getCurrentProgression(state);

  return get(['ui', 'route', getId(progression)], state);
};

export const getCurrentContent = pipe(getCurrentProgression, get('state.nextContent'));
