import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import pipe from 'lodash/fp/pipe';

const getId = get('_id');

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

export const getChapter = id => state => {
  const entities = get('data.chapters.entities')(state);
  return get(id)(entities);
};

export const getCurrentChapter = state => {
  const id = get('content.ref')(getCurrentProgression(state));
  return getChapter(id)(state);
};

export const getCurrentSlide = state => {
  const id = get('state.nextContent.ref')(getCurrentProgression(state));
  return getSlide(id)(state);
};

export const getContent = state => {
  return get('content')(getCurrentProgression(state));
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

export const getCorrection = (progressionId, slideId) => state => {
  return get(['data', 'answers', 'entities', progressionId, slideId], state);
};
export const getCurrentCorrection = state => {
  const progression = getCurrentProgression(state);
  const slide = getPreviousSlide(state);

  return getCorrection(getId(progression), getId(slide))(state);
};

export const getCurrentContentRef = state => get('content.ref')(getCurrentProgression(state));

export const getClue = (progressionId, slideId) => state => {
  return get(['data', 'clues', 'entities', progressionId, slideId], state);
};

export const getCurrentClue = state => {
  const progression = getCurrentProgression(state);
  const slide = getCurrentSlide(state);

  return getClue(getId(progression), getId(slide))(state);
};

export const getRoute = state => {
  const progressionId = getCurrentProgressionId(state);

  return get(['ui', 'route', progressionId], state);
};

export const getCurrentContent = pipe(getCurrentProgression, get('state.nextContent'));

export const getRecommendations = state => {
  const id = getCurrentProgressionId(state);
  return get(`data.recommendations.entities.${id}`, state);
};

export const getStartRank = state => {
  return get(`data.rank.start`, state);
};

export const getEndRank = state => {
  return get(`data.rank.end`, state);
};
