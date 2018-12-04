import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import pipe from 'lodash/fp/pipe';
import _toString from 'lodash/fp/toString';

const getId = get('_id');

export const getChapterId = get('chapter_id');
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

export const getCurrentEngine = state => {
  const progression = getCurrentProgression(state);
  return get(['engine'], progression);
};

export const isCurrentEngineMicrolearning = state => {
  const engine = getCurrentEngine(state);
  return get('ref', engine) === 'microlearning';
};

export const isCurrentEngineLearner = state => {
  const engine = getCurrentEngine(state);
  return get('ref', engine) === 'learner';
};

export const getAnswers = state => {
  const progressionId = getCurrentProgressionId(state);
  return getOr({}, ['ui', 'answers', progressionId])(state);
};

export const getAnswerValues = (slide, state) => {
  const answers = get('value', getAnswers(state));
  const defaultValue = get('question.content.defaultValue', slide);
  if (answers === undefined && defaultValue !== undefined) {
    return [_toString(defaultValue)];
  }
  return answers;
};

export const getSlide = id => get(['data', 'contents', 'slide', 'entities', id]);

export const getCurrentSlide = state => {
  const id = get('state.nextContent.ref')(getCurrentProgression(state));
  return getSlide(id)(state);
};

export const getProgressionContent = state => {
  return get('content')(getCurrentProgression(state));
};

export const getContent = (type, ref) => get(['data', 'contents', type, 'entities', ref]);

export const getCurrentContent = state => {
  const {type, ref} = getProgressionContent(state);
  return getContent(type, ref)(state);
};

export const getContentInfo = pipe(getCurrentContent, get('info'));
export const getNbSlides = pipe(getContentInfo, get('nbSlides'));
export const getStepContent = pipe(getCurrentProgression, get('state.nextContent'));
export const getPrevStepContent = pipe(getCurrentProgression, get('state.content'));
export const getCurrentChapterId = pipe(getCurrentSlide, getChapterId);
export const getCurrentChapter = state => {
  const chapterId = getCurrentChapterId(state);
  return getContent('chapter', chapterId)(state);
};
export const isContentAdaptive = state => {
  const chapter = getCurrentChapter(state);
  return getOr(false, 'isConditional', chapter);
};
export const hasViewedAResourceAtThisStep = pipe(
  getCurrentProgression,
  get('state.hasViewedAResourceAtThisStep')
);

export const getEngine = state => {
  return get('engine')(getCurrentProgression(state));
};

export const getEngineConfig = state => {
  const engine = getEngine(state);
  return get(['data', 'configs', 'entities', `${engine.ref}@${engine.version}`], state);
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

export const isCommentSent = state => {
  const progressionId = getCurrentProgressionId(state);
  return get(['data', 'comments', 'entities', progressionId, 'isSent'], state);
};

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

export const getRecommendations = state => {
  const id = getCurrentProgressionId(state);
  return get(`data.recommendations.entities.${id}`, state);
};

export const getNextContent = state => {
  const id = getCurrentProgressionId(state);
  return get(`data.nextContent.entities.${id}`, state);
};

export const getStartRank = get(`data.rank.start`);
export const getEndRank = get(`data.rank.end`);
export const getBestScore = pipe(getCurrentContent, get('bestScore'));

export const getQuestionMedia = state => {
  const slide = getCurrentSlide(state);
  const media = get('question.medias.0', slide);
  if (!media) {
    return;
  }
  const {type} = media;
  const resource = get('src.0', media);
  switch (type) {
    case 'img':
      return {
        type,
        url: resource.url
      };
    case 'video':
      return {
        ...resource,
        type
      };
  }
};

export const getResourceToPlay = state => get('ui.corrections.playResource', state);

export const getLives = state => {
  const progression = getCurrentProgression(state);
  return progression.state.livesDisabled ? null : get('state.lives', progression);
};

export const getCoaches = getOr(0, 'ui.coaches.availableCoaches');
