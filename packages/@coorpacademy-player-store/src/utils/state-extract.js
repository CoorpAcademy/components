// @flow strict

import get from 'lodash/fp/get';
import last from 'lodash/fp/last';
import getOr from 'lodash/fp/getOr';
import pipe from 'lodash/fp/pipe';
import any from 'lodash/fp/any';
import find from 'lodash/fp/find';
import includes from 'lodash/fp/includes';
import isEmpty from 'lodash/fp/isEmpty';
import map from 'lodash/fp/map';
import _toString from 'lodash/fp/toString';
import type {
  Answer,
  Choice,
  Content,
  ContentType,
  ContentInfo,
  Engine,
  EngineConfig,
  GenericContent,
  Lesson,
  Media,
  Progression,
  ProgressionId,
  QuestionType,
  Slide
} from '@coorpacademy/progression-engine';
import type {
  Chapter,
  Correction,
  Discipline,
  ExitNode,
  Level,
  Lives,
  // eslint-disable-next-line no-unused-vars
  Resource,
  Recommendation
} from '../definitions/models';
import type {ReduxState as State} from '../definitions/redux';
import {CONTENT_TYPE, ENGINES} from '../definitions/models';

export const getChoices = (slide: Slide): Array<Choice> | void => {
  if (!slide || !slide.question || !slide.question.content || !slide.question.content.choices) {
    return undefined;
  }

  // $FlowFixMe flow cannot cast here "property choices of unknown type is incompatible with array type"
  return slide.question.content.choices;
};
export const getChapterId = (slide: Slide): string => slide.chapter_id;
export const getQuestionType = (slide: Slide): QuestionType => slide.question.type;
export const getCurrentProgressionId = (state: State): ProgressionId =>
  state.ui.current.progressionId;

export const getProgression = (id: ProgressionId): (State => Progression) => (
  state: State
): Progression =>
  state && state.data && state.data.progressions.entities && state.data.progressions.entities[id];

export const getCurrentProgression = (state: State): Progression | void => {
  const id = getCurrentProgressionId(state);
  return getProgression(id)(state);
};

export const getCurrentEngine = (state: State): Engine | void => {
  const progression = getCurrentProgression(state);
  if (!progression) {
    return;
  }
  return progression.engine;
};

export const isCurrentEngineMicrolearning = (state: State): boolean => {
  const engine = getCurrentEngine(state);
  if (!engine) {
    return false;
  }

  return engine.ref === ENGINES.MICROLEARNING;
};

export const isCurrentEngineLearner = (state: State): boolean => {
  const engine = getCurrentEngine(state);
  if (!engine) {
    return false;
  }

  return engine.ref === ENGINES.LEARNER;
};

export const getAnswers = (state: State): Answer => {
  const progressionId = getCurrentProgressionId(state);
  return getOr({}, ['ui', 'answers', progressionId])(state);
};

export const getAnswerValues = (slide: Slide, state: State): Answer => {
  const answers: Answer = get('value', getAnswers(state));
  const defaultValue = get('question.content.defaultValue', slide);
  if (answers === undefined && defaultValue !== undefined) {
    const answer = _toString(defaultValue);
    return [answer];
  }
  return answers;
};

export const getSlide = (id: string): (State => Slide) => (state: State): Slide =>
  state &&
  state.data &&
  state.data.contents &&
  state.data.contents.slide &&
  state.data.contents.slide.entities &&
  state.data.contents.slide.entities[id];

export const getCurrentSlide = (state: State): Slide | void => {
  const progression = getCurrentProgression(state);

  if (!progression || !progression.state) {
    return;
  }
  const slideId = progression.state.nextContent.ref;
  return getSlide(slideId)(state);
};

export const getChapter = (ref: string): (State => Chapter | void) => (
  state: State
): Chapter | void =>
  state &&
  state.data &&
  state.data.contents &&
  state.data.contents.chapter &&
  state.data.contents.chapter.entities &&
  state.data.contents.chapter.entities[ref];

export const getLevel = (ref: string): (State => Level | void) => (state: State): Level | void =>
  state &&
  state.data &&
  state.data.contents &&
  state.data.contents.level &&
  state.data.contents.level.entities &&
  state.data.contents.level.entities[ref];

export const getDiscipline = (ref: string): (State => Discipline | void) => (
  state: State
): Discipline | void =>
  state &&
  state.data &&
  state.data.contents &&
  state.data.contents.discipline &&
  state.data.contents.discipline.entities &&
  state.data.contents.discipline.entities[ref];

export const getProgressionContent = (state: State): GenericContent | void => {
  const progression = getCurrentProgression(state);

  if (!progression) {
    return;
  }

  return progression.content;
};

export const getContent: (
  type: ContentType,
  ref: string
) => State => Chapter | Slide | Level | Discipline | string = (
  type: ContentType,
  ref: string
): (State => Chapter | Slide | Level | Discipline | string) =>
  get(['data', 'contents', type, 'entities', ref]);

export const getCurrentContent = (
  state: State
): Chapter | Discipline | Slide | Level | string | void => {
  const content = getProgressionContent(state);

  if (!content) {
    return;
  }

  const {type, ref} = content;
  return getContent(type, ref)(state);
};

export const getContentInfo = (state: State): ContentInfo | void => {
  const content = getProgressionContent(state);

  if (!content) {
    return;
  }

  const {type, ref} = content;
  if (type === CONTENT_TYPE.SLIDE) {
    return;
  }

  if (type === CONTENT_TYPE.LEVEL) {
    const level = getLevel(ref)(state);
    return level && level.info;
  }

  if (type === CONTENT_TYPE.CHAPTER) {
    const chapter = getChapter(ref)(state);
    return chapter && chapter.info;
  }

  return;
};

export const getNbSlides = (state: State): number => {
  const info = getContentInfo(state);
  return info ? info.nbSlides : 0;
};

export const getStepContent = (state: State): Content | void => {
  const progression = getCurrentProgression(state);

  if (!progression || !progression.state) {
    return;
  }

  return progression.state.nextContent;
};

export const getPrevStepContent = (state: State): Content | void => {
  const progression = getCurrentProgression(state);

  if (!progression || !progression.state) {
    return;
  }

  return progression.state.content;
};

export const getChapterIdBySlide = (state: State, slideId: string): string | void => {
  const slide = getSlide(slideId)(state);
  if (!slide) {
    return;
  }
  return getChapterId(slide);
};

export const getCurrentChapterId = (state: State): string | void => {
  const progression = getCurrentProgression(state);
  if (!progression || !progression.state || !progression.state.nextContent) {
    return;
  }
  if (progression.state.nextContent.type === 'slide') {
    return getChapterIdBySlide(state, progression.state.nextContent.ref);
  } else {
    if (!progression.state.slides || isEmpty(progression.state.slides)) {
      return;
    }
    const lastSlideId = last(progression.state.slides);
    return getChapterIdBySlide(state, lastSlideId);
  }
};

export const getCurrentChapter = (state: State): Chapter | void => {
  const chapterId = getCurrentChapterId(state);

  if (!chapterId) {
    return;
  }

  return getChapter(chapterId)(state);
};

export const isContentAdaptive = (state: State): boolean => {
  const chapter = getCurrentChapter(state);

  if (!chapter) {
    return false;
  }

  return getOr(false, 'isConditional', chapter);
};

export const hasViewedAResourceAtThisStep = (state: State): boolean => {
  const progression = getCurrentProgression(state);

  if (!progression || !progression.state) {
    return false;
  }

  return progression.state.hasViewedAResourceAtThisStep;
};

export const getEngine = (state: State): Engine | void => {
  const progression = getCurrentProgression(state);

  if (!progression) {
    return;
  }

  return progression.engine;
};

export const getEngineConfig = (state: State): EngineConfig | void => {
  const engine = getEngine(state);

  if (!engine) {
    return;
  }

  const config = `${engine.ref}@${engine.version}`;
  return state.data.configs && state.data.configs.entities && state.data.configs.entities[config];
};

export const getPreviousSlide = (state: State): Slide | void => {
  const progression = getCurrentProgression(state);

  if (!progression || !progression.state || !progression.state.content) {
    return;
  }

  const slideId = progression.state.content.ref;
  return getSlide(slideId)(state);
};

export const getExitNode = (ref: string) => (state: State): ExitNode => {
  const entities = get('data.exitNodes.entities')(state);
  return get(ref)(entities);
};

export const getCurrentExitNode = (state: State): ExitNode | void => {
  const progression = getCurrentProgression(state);

  if (!progression || !progression.state) {
    return;
  }

  const ref = progression.state.nextContent.ref;
  return getExitNode(ref)(state);
};

export const getCorrection = (progressionId: string, slideId: string) => (
  state: State
): Correction | void | null => {
  return get(['data', 'answers', 'entities', progressionId, slideId], state);
};
export const getCurrentCorrection = (state: State): Correction => {
  const defaultCorrection = {
    correctAnswer: [],
    corrections: []
  };
  const progression = getCurrentProgression(state);
  const progressionId = progression && progression._id;

  if (!progressionId) {
    return defaultCorrection;
  }

  const slide = getPreviousSlide(state);

  if (!slide) {
    return defaultCorrection;
  }

  const correction = getCorrection(progressionId, slide._id)(state);

  if (!correction) {
    return defaultCorrection;
  }

  return correction;
};

export const isCommentSent = (state: State): boolean => {
  const progressionId = getCurrentProgressionId(state);
  return get(['data', 'comments', 'entities', progressionId, 'isSent'], state);
};

export const extractClue = (progressionId: string, slideId: string) => (state: State): string => {
  return get(['data', 'clues', 'entities', progressionId, slideId], state);
};

export const getCurrentClue = (state: State): string => {
  const progression = getCurrentProgression(state);

  if (!progression) {
    return '';
  }

  const progressionId = progression._id;
  const slide = getCurrentSlide(state);

  if (!progressionId || !slide) {
    return '';
  }

  return extractClue(progressionId, slide._id)(state);
};

export const getRoute = (state: State): string => {
  const progressionId = getCurrentProgressionId(state);
  return get(['ui', 'route', progressionId], state);
};

export const getRecommendations = (state: State): Array<Recommendation> => {
  const id = getCurrentProgressionId(state);
  return get(`data.recommendations.entities.${id}`, state);
};

export const getNextContent = (state: State): Content | void => {
  const id = getCurrentProgressionId(state);
  return get(`data.nextContent.entities.${id}`, state);
};

export const getStartRank: State => number = get(`data.rank.start`);
export const getEndRank: State => number = get(`data.rank.end`);
export const getBestScore = (state: State): number | void => {
  const content = getProgressionContent(state);

  if (!content) {
    return;
  }

  const {type, ref} = content;
  if (type === CONTENT_TYPE.SLIDE) {
    return;
  }

  if (type === CONTENT_TYPE.LEVEL) {
    const level = getLevel(ref)(state);
    return level && level.bestScore;
  }

  if (type === CONTENT_TYPE.CHAPTER) {
    const chapter = getChapter(ref)(state);
    return chapter && chapter.bestScore;
  }
};

export const getQuestionMedia = (state: State): void | Media => {
  const slide = getCurrentSlide(state);

  if (!slide) {
    return;
  }

  const media: Media = get('question.medias.0', slide);
  if (!media) {
    return;
  }
  const {type} = media;
  const resource = get('src.0', media);
  switch (type) {
    case 'img':
      return {
        ...resource,
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

export const getResourceToPlay: State => string = get('ui.corrections.playResource');

export const getLives = (state: State): Lives => {
  const progression = getCurrentProgression(state);
  if (!progression || progression.state === undefined) {
    return {
      hide: true,
      count: 0
    };
  }
  const hide = Boolean(isContentAdaptive(state) || progression.state.livesDisabled);

  return {
    hide,
    count: progression.state.lives
  };
};

export const getCoaches: State => number = getOr(0, 'ui.coaches.availableCoaches');

export const hasSeenLesson = (state: State, onPreviousSlide: boolean = false): boolean => {
  const progression = getCurrentProgression(state);

  if (!progression || !progression.state) {
    return false;
  }

  const slide = onPreviousSlide ? getPreviousSlide(state) : getCurrentSlide(state);

  if (!slide) {
    return false;
  }
  const lessons: Array<Lesson> = get('lessons', slide);
  const viewedResources = getOr([], ['state', 'viewedResources'], progression);
  const chapterContent = {
    type: 'chapter',
    ref: get('chapter_id', slide)
  };

  // $FlowFixMe pipe issue with flow typing
  const viewedResourcesForContent = pipe([find(chapterContent), getOr([], 'resources')])(
    viewedResources
  );

  return (
    isEmpty(lessons) || any(ref => includes(ref, map('ref', lessons)), viewedResourcesForContent)
  );
};

export const getVideoUri = (id: string) => (state: State): string | void =>
  get(['data', 'videos', 'entities', id], state);
