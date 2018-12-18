// @flow

import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import pipe from 'lodash/fp/pipe';
import any from 'lodash/fp/any';
import find from 'lodash/fp/find';
import includes from 'lodash/fp/includes';
import isEmpty from 'lodash/fp/isEmpty';
import map from 'lodash/fp/map';
import _toString from 'lodash/fp/toString';
import type {State, Progression, Content} from '@coorpacademy/progression-engine';
import type {Answers, Slide, Chapter, ExitNode, Recommendation, Media, Lesson} from '../types';

const getId: string = get('_id');

export const getChapterId: string = get('chapter_id');
export const getChoices: string = get('question.content.choices');
export const getCurrentProgressionId: string = get('ui.current.progressionId');
export const getQuestionType: string = get('question.type');

export const getProgression = (id: string) => (state: State): Progression => {
  return get(['data', 'progressions', 'entities', id], state);
};

export const getCurrentProgression = (state: State): Progression => {
  const id: string = getCurrentProgressionId(state);
  return getProgression(id)(state);
};

export const getCurrentEngine = (state: State): Progression => {
  const progression: Progression = getCurrentProgression(state);
  return get(['engine'], progression);
};

export const isCurrentEngineMicrolearning = (state: State): boolean => {
  const engine: string = getCurrentEngine(state);
  return get('ref', engine) === 'microlearning';
};

export const isCurrentEngineLearner = (state: State): boolean => {
  const engine: string = getCurrentEngine(state);
  return get('ref', engine) === 'learner';
};

export const getAnswers = (state: State): Answers => {
  const progressionId: string = getCurrentProgressionId(state);
  return getOr({}, ['ui', 'answers', progressionId])(state);
};

export const getAnswerValues = (slide, state: State): Answers => {
  const answers: Answers = get('value', getAnswers(state));
  const defaultValue = get('question.content.defaultValue', slide);
  if (answers === undefined && defaultValue !== undefined) {
    return [_toString(defaultValue)];
  }
  return answers;
};

export const getSlide = (id: string): Slide => get(['data', 'contents', 'slide', 'entities', id]);

export const getCurrentSlide = (state: State): Slide => {
  const id: string = get('state.nextContent.ref')(getCurrentProgression(state));
  return getSlide(id)(state);
};

export const getProgressionContent = (state: State): Content => {
  return get('content')(getCurrentProgression(state));
};

export const getContent = (type: string, ref: string): Content =>
  get(['data', 'contents', type, 'entities', ref]);

export const getCurrentContent = (state: State): Content => {
  const {type, ref} = getProgressionContent(state);
  return getContent(type, ref)(state);
};

export const getContentInfo = pipe(getCurrentContent, get('info'));
export const getNbSlides = pipe(getContentInfo, get('nbSlides'));
export const getStepContent = pipe(getCurrentProgression, get('state.nextContent'));
export const getPrevStepContent = pipe(getCurrentProgression, get('state.content'));
export const getCurrentChapterId: string = pipe(getCurrentSlide, getChapterId);

export const getCurrentChapter = (state: State): Chapter => {
  const chapterId: string = getCurrentChapterId(state);
  return getContent('chapter', chapterId)(state);
};
export const isContentAdaptive = (state: State): boolean => {
  const chapter: Chapter = getCurrentChapter(state);
  return getOr(false, 'isConditional', chapter);
};
export const hasViewedAResourceAtThisStep: boolean = pipe(
  getCurrentProgression,
  get('state.hasViewedAResourceAtThisStep')
);

export const getEngine = (state: State): Engine => {
  return get('engine')(getCurrentProgression(state));
};

export const getEngineConfig = (state: State): Engine => {
  const engine = getEngine(state);
  return get(['data', 'configs', 'entities', `${engine.ref}@${engine.version}`], state);
};

export const getPreviousSlide = (state: State): Slide => {
  const id: string = get('state.content.ref')(getCurrentProgression(state));
  return getSlide(id)(state);
};

export const getExitNode = (ref: string) => (state: State): ExitNode => {
  const entities = get('data.exitNodes.entities')(state);
  return get(ref)(entities);
};

export const getCurrentExitNode = (state: State): ExitNode => {
  const ref: string = get('state.nextContent.ref')(getCurrentProgression(state));
  return getExitNode(ref)(state);
};

export const getCorrection = (progressionId: string, slideId: string) => (state: State): string => {
  return get(['data', 'answers', 'entities', progressionId, slideId], state);
};
export const getCurrentCorrection = (state: State): string => {
  const progression: Progression = getCurrentProgression(state);
  const slide: Slide = getPreviousSlide(state);

  return getCorrection(getId(progression), getId(slide))(state);
};

export const isCommentSent = (state: State): boolean => {
  const progressionId: string = getCurrentProgressionId(state);
  return get(['data', 'comments', 'entities', progressionId, 'isSent'], state);
};

export const extractClue = (progressionId: string, slideId: string) => (state: State): string => {
  return get(['data', 'clues', 'entities', progressionId, slideId], state);
};

export const getCurrentClue = (state: State): string => {
  const progression: Progression = getCurrentProgression(state);
  const slide: Slide = getCurrentSlide(state);

  return extractClue(getId(progression), getId(slide))(state);
};

export const getRoute = (state: State): string => {
  const progressionId: string = getCurrentProgressionId(state);
  return get(['ui', 'route', progressionId], state);
};

export const getRecommendations = (state: State): Array<Recommendation> => {
  const id: string = getCurrentProgressionId(state);
  return get(`data.recommendations.entities.${id}`, state);
};

export const getNextContent = (state: State): Content => {
  const id: string = getCurrentProgressionId(state);
  return get(`data.nextContent.entities.${id}`, state);
};

export const getStartRank = get(`data.rank.start`);
export const getEndRank = get(`data.rank.end`);
export const getBestScore = pipe(getCurrentContent, get('bestScore'));

export const getQuestionMedia = (state: State): Media => {
  const slide: Slide = getCurrentSlide(state);
  const media: Media = get('question.medias.0', slide);
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

export const getResourceToPlay = (state: State) => get('ui.corrections.playResource', state);

export const getLives = (state: State): number => {
  const progression: Progression = getCurrentProgression(state);
  return progression.state.livesDisabled ? null : get('state.lives', progression);
};

export const getCoaches = getOr(0, 'ui.coaches.availableCoaches');

export const hasSeenLesson = (state: State): boolean => {
  const progression: Progression = getCurrentProgression(state);
  const slide: Slide = getCurrentSlide(state) || getPreviousSlide(state);
  const lessons: Array<Lesson> = get('lessons', slide);
  const viewedResources = getOr([], ['state', 'viewedResources'], progression);
  const chapterContent = {
    type: 'chapter',
    ref: get('chapter_id', slide)
  };
  const viewedResourcesForContent = pipe(find(chapterContent), getOr([], 'resources'))(
    viewedResources
  );

  return (
    isEmpty(lessons) || any(ref => includes(ref, map('ref', lessons)), viewedResourcesForContent)
  );
};
