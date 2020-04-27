"use strict";

exports.__esModule = true;
exports.isQuestionCtaDisabled = exports.getPrevAnswer = exports.getVideoTracks = exports.getVideoUri = exports.hasSeenLesson = exports.getCoaches = exports.getLives = exports.getProgressionSteps = exports.getCurrentStep = exports.getResourceToPlay = exports.getContextMedia = exports.getQuestionMedia = exports.getBestScore = exports.getEndRank = exports.getStartRank = exports.getNextContent = exports.getRecommendations = exports.getRoute = exports.getCurrentClue = exports.extractClue = exports.isCommentSent = exports.getCurrentCorrection = exports.getCorrection = exports.getCurrentExitNode = exports.getExitNode = exports.getPreviousSlide = exports.getEngineConfig = exports.getEngine = exports.hasViewedAResourceAtThisStep = exports.isContentAdaptive = exports.getCurrentChapter = exports.getCurrentChapterId = exports.getChapterIdBySlide = exports.getPrevStepContent = exports.getStepContent = exports.getNbSlides = exports.getContentInfo = exports.getCurrentContent = exports.getContent = exports.getProgressionContent = exports.getDiscipline = exports.getLevel = exports.getChapter = exports.getCurrentSlide = exports.getSlide = exports.getAnswerValues = exports.getAnswers = exports.isCurrentEngineLearner = exports.isCurrentEngineMicrolearning = exports.getCurrentEngine = exports.getCurrentProgression = exports.getProgression = exports.getCurrentProgressionId = exports.getQuestionType = exports.getChapterId = exports.getChoices = void 0;

var _toString3 = _interopRequireDefault(require("lodash/fp/toString"));

var _some2 = _interopRequireDefault(require("lodash/fp/some"));

var _map2 = _interopRequireDefault(require("lodash/fp/map"));

var _isEmpty2 = _interopRequireDefault(require("lodash/fp/isEmpty"));

var _includes2 = _interopRequireDefault(require("lodash/fp/includes"));

var _find2 = _interopRequireDefault(require("lodash/fp/find"));

var _any2 = _interopRequireDefault(require("lodash/fp/any"));

var _pipe2 = _interopRequireDefault(require("lodash/fp/pipe"));

var _getOr2 = _interopRequireDefault(require("lodash/fp/getOr"));

var _last2 = _interopRequireDefault(require("lodash/fp/last"));

var _get2 = _interopRequireDefault(require("lodash/fp/get"));

var _models = require("../definitions/models");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const getChoices = slide => {
  if (!slide || !slide.question || !slide.question.content || !slide.question.content.choices) {
    return undefined;
  } // $FlowFixMe flow cannot cast here "property choices of unknown type is incompatible with array type"


  return slide.question.content.choices;
};

exports.getChoices = getChoices;

const getChapterId = slide => slide.chapter_id;

exports.getChapterId = getChapterId;

const getQuestionType = slide => slide.question.type;

exports.getQuestionType = getQuestionType;

const getCurrentProgressionId = state => state.ui.current.progressionId;

exports.getCurrentProgressionId = getCurrentProgressionId;

const getProgression = id => state => state && state.data && state.data.progressions.entities && state.data.progressions.entities[id];

exports.getProgression = getProgression;

const getCurrentProgression = state => {
  const id = getCurrentProgressionId(state);
  return getProgression(id)(state);
};

exports.getCurrentProgression = getCurrentProgression;

const getCurrentEngine = state => {
  const progression = getCurrentProgression(state);

  if (!progression) {
    return;
  }

  return progression.engine;
};

exports.getCurrentEngine = getCurrentEngine;

const isCurrentEngineMicrolearning = state => {
  const engine = getCurrentEngine(state);

  if (!engine) {
    return false;
  }

  return engine.ref === _models.ENGINES.MICROLEARNING;
};

exports.isCurrentEngineMicrolearning = isCurrentEngineMicrolearning;

const isCurrentEngineLearner = state => {
  const engine = getCurrentEngine(state);

  if (!engine) {
    return false;
  }

  return engine.ref === _models.ENGINES.LEARNER;
};

exports.isCurrentEngineLearner = isCurrentEngineLearner;

const getAnswers = state => {
  const progressionId = getCurrentProgressionId(state);
  return (0, _getOr2.default)({}, ['ui', 'answers', progressionId])(state);
};

exports.getAnswers = getAnswers;

const getAnswerValues = (slide, state) => {
  const answers = (0, _get2.default)('value', getAnswers(state));
  const defaultValue = (0, _get2.default)('question.content.defaultValue', slide);

  if (answers === undefined && defaultValue !== undefined) {
    const answer = (0, _toString3.default)(defaultValue);
    return [answer];
  }

  return answers;
};

exports.getAnswerValues = getAnswerValues;

const getSlide = id => state => state && state.data && state.data.contents && state.data.contents.slide && state.data.contents.slide.entities && state.data.contents.slide.entities[id];

exports.getSlide = getSlide;

const getCurrentSlide = state => {
  const progression = getCurrentProgression(state);

  if (!progression || !progression.state) {
    return;
  }

  const slideId = progression.state.nextContent.ref;
  return getSlide(slideId)(state);
};

exports.getCurrentSlide = getCurrentSlide;

const getChapter = ref => state => state && state.data && state.data.contents && state.data.contents.chapter && state.data.contents.chapter.entities && state.data.contents.chapter.entities[ref];

exports.getChapter = getChapter;

const getLevel = ref => state => state && state.data && state.data.contents && state.data.contents.level && state.data.contents.level.entities && state.data.contents.level.entities[ref];

exports.getLevel = getLevel;

const getDiscipline = ref => state => state && state.data && state.data.contents && state.data.contents.discipline && state.data.contents.discipline.entities && state.data.contents.discipline.entities[ref];

exports.getDiscipline = getDiscipline;

const getProgressionContent = state => {
  const progression = getCurrentProgression(state);

  if (!progression) {
    return;
  }

  return progression.content;
};

exports.getProgressionContent = getProgressionContent;

const getContent = (type, ref) => (0, _get2.default)(['data', 'contents', type, 'entities', ref]);

exports.getContent = getContent;

const getCurrentContent = state => {
  const content = getProgressionContent(state);

  if (!content) {
    return;
  }

  const {
    type,
    ref
  } = content;
  return getContent(type, ref)(state);
};

exports.getCurrentContent = getCurrentContent;

const getContentInfo = state => {
  const content = getProgressionContent(state);

  if (!content) {
    return;
  }

  const {
    type,
    ref
  } = content;

  if (type === _models.CONTENT_TYPE.SLIDE) {
    return;
  }

  if (type === _models.CONTENT_TYPE.LEVEL) {
    const level = getLevel(ref)(state);
    return level && level.info;
  }

  if (type === _models.CONTENT_TYPE.CHAPTER) {
    const chapter = getChapter(ref)(state);
    return chapter && chapter.info;
  }

  return;
};

exports.getContentInfo = getContentInfo;

const getNbSlides = state => {
  const info = getContentInfo(state);
  return info ? info.nbSlides : 0;
};

exports.getNbSlides = getNbSlides;

const getStepContent = state => {
  const progression = getCurrentProgression(state);

  if (!progression || !progression.state) {
    return;
  }

  return progression.state.nextContent;
};

exports.getStepContent = getStepContent;

const getPrevStepContent = state => {
  const progression = getCurrentProgression(state);

  if (!progression || !progression.state) {
    return;
  }

  return progression.state.content;
};

exports.getPrevStepContent = getPrevStepContent;

const getChapterIdBySlide = (state, slideId) => {
  const slide = getSlide(slideId)(state);

  if (!slide) {
    return;
  }

  return getChapterId(slide);
};

exports.getChapterIdBySlide = getChapterIdBySlide;

const getCurrentChapterId = state => {
  const progression = getCurrentProgression(state);

  if (!progression || !progression.state || !progression.state.nextContent) {
    return;
  }

  if (progression.state.nextContent.type === 'slide') {
    return getChapterIdBySlide(state, progression.state.nextContent.ref);
  } else {
    if (!progression.state.slides || (0, _isEmpty2.default)(progression.state.slides)) {
      return;
    }

    const lastSlideId = (0, _last2.default)(progression.state.slides);
    return getChapterIdBySlide(state, lastSlideId);
  }
};

exports.getCurrentChapterId = getCurrentChapterId;

const getCurrentChapter = state => {
  const chapterId = getCurrentChapterId(state);

  if (!chapterId) {
    return;
  }

  return getChapter(chapterId)(state);
};

exports.getCurrentChapter = getCurrentChapter;

const isContentAdaptive = state => {
  const chapter = getCurrentChapter(state);

  if (!chapter) {
    return false;
  }

  return (0, _getOr2.default)(false, 'isConditional', chapter);
};

exports.isContentAdaptive = isContentAdaptive;

const hasViewedAResourceAtThisStep = state => {
  const progression = getCurrentProgression(state);

  if (!progression || !progression.state) {
    return false;
  }

  return progression.state.hasViewedAResourceAtThisStep;
};

exports.hasViewedAResourceAtThisStep = hasViewedAResourceAtThisStep;

const getEngine = state => {
  const progression = getCurrentProgression(state);

  if (!progression) {
    return;
  }

  return progression.engine;
};

exports.getEngine = getEngine;

const getEngineConfig = state => {
  const engine = getEngine(state);

  if (!engine) {
    return;
  }

  const config = `${engine.ref}@${engine.version}`;
  return state.data.configs && state.data.configs.entities && state.data.configs.entities[config];
};

exports.getEngineConfig = getEngineConfig;

const getPreviousSlide = state => {
  const progression = getCurrentProgression(state);

  if (!progression || !progression.state || !progression.state.content) {
    return;
  }

  const slideId = progression.state.content.ref;
  return getSlide(slideId)(state);
};

exports.getPreviousSlide = getPreviousSlide;

const getExitNode = ref => state => {
  const entities = (0, _get2.default)('data.exitNodes.entities')(state);
  return (0, _get2.default)(ref)(entities);
};

exports.getExitNode = getExitNode;

const getCurrentExitNode = state => {
  const progression = getCurrentProgression(state);

  if (!progression || !progression.state) {
    return;
  }

  const ref = progression.state.nextContent.ref;
  return getExitNode(ref)(state);
};

exports.getCurrentExitNode = getCurrentExitNode;

const getCorrection = (progressionId, slideId) => state => {
  return (0, _get2.default)(['data', 'answers', 'entities', progressionId, slideId], state);
};

exports.getCorrection = getCorrection;

const getCurrentCorrection = state => {
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

exports.getCurrentCorrection = getCurrentCorrection;

const isCommentSent = state => {
  const progressionId = getCurrentProgressionId(state);
  return (0, _get2.default)(['data', 'comments', 'entities', progressionId, 'isSent'], state);
};

exports.isCommentSent = isCommentSent;

const extractClue = (progressionId, slideId) => state => {
  return (0, _get2.default)(['data', 'clues', 'entities', progressionId, slideId], state);
};

exports.extractClue = extractClue;

const getCurrentClue = state => {
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

exports.getCurrentClue = getCurrentClue;

const getRoute = state => {
  const progressionId = getCurrentProgressionId(state);
  return (0, _get2.default)(['ui', 'route', progressionId], state);
};

exports.getRoute = getRoute;

const getRecommendations = state => {
  const id = getCurrentProgressionId(state);
  return (0, _get2.default)(`data.recommendations.entities.${id}`, state);
};

exports.getRecommendations = getRecommendations;

const getNextContent = state => {
  const id = getCurrentProgressionId(state);
  return (0, _get2.default)(`data.nextContent.entities.${id}`, state);
};

exports.getNextContent = getNextContent;
const getStartRank = (0, _get2.default)(`data.rank.start`);
exports.getStartRank = getStartRank;
const getEndRank = (0, _get2.default)(`data.rank.end`);
exports.getEndRank = getEndRank;

const getBestScore = state => {
  const content = getProgressionContent(state);

  if (!content) {
    return;
  }

  const {
    type,
    ref
  } = content;

  if (type === _models.CONTENT_TYPE.SLIDE) {
    return;
  }

  if (type === _models.CONTENT_TYPE.LEVEL) {
    const level = getLevel(ref)(state);
    return level && level.bestScore;
  }

  if (type === _models.CONTENT_TYPE.CHAPTER) {
    const chapter = getChapter(ref)(state);
    return chapter && chapter.bestScore;
  }
};

exports.getBestScore = getBestScore;

const getMedia = media => {
  const {
    type
  } = media;
  const resource = (0, _get2.default)('src.0', media);

  switch (type) {
    case 'img':
      return _extends({}, resource, {
        type,
        url: resource.url
      });

    case 'video':
      return _extends({}, resource, {
        type
      });
  }
};

const getQuestionMedia = state => {
  const slide = getCurrentSlide(state);

  if (!slide) {
    return;
  }

  const media = (0, _get2.default)('question.medias.0', slide);

  if (!media) {
    return;
  }

  return getMedia(media);
};

exports.getQuestionMedia = getQuestionMedia;

const getContextMedia = state => {
  const slide = getCurrentSlide(state);

  if (!slide) {
    return;
  }

  const media = (0, _get2.default)('context.media', slide);

  if (!media) {
    return;
  }

  return getMedia(media);
};

exports.getContextMedia = getContextMedia;
const getResourceToPlay = (0, _get2.default)('ui.corrections.playResource');
exports.getResourceToPlay = getResourceToPlay;

const getLives = state => {
  const progression = getCurrentProgression(state);
  const chapter = getCurrentChapter(state);
  if (!progression || progression.state === undefined || !chapter) {
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

exports.getLives = getLives;


const getProgressionSteps = state => {

  const progression = getCurrentProgression(state);
  const chapter = getCurrentChapter(state);

  console.log("progression:", progression)
  return ( !progression || progression.state === undefined || !chapter) 
    ? null
    : { 
      current: getCurrentStep(state),
      total: getNbSlides(state),
    };

};

exports.getProgressionSteps = getProgressionSteps;

const getCurrentStep = state => {
  const progression = getCurrentProgression(state);
  return progression && progression.state && progression.state.step.current;
};

exports.getCurrentStep = getCurrentStep;


const getCoaches = (0, _getOr2.default)(0, 'ui.coaches.availableCoaches');
exports.getCoaches = getCoaches;

const hasSeenLesson = (state, onPreviousSlide = false) => {
  const progression = getCurrentProgression(state);

  if (!progression || !progression.state) {
    return false;
  }

  const slide = onPreviousSlide ? getPreviousSlide(state) : getCurrentSlide(state);

  if (!slide) {
    return false;
  }

  const lessons = (0, _get2.default)('lessons', slide);
  const viewedResources = (0, _getOr2.default)([], ['state', 'viewedResources'], progression);
  const chapterContent = {
    type: 'chapter',
    ref: (0, _get2.default)('chapter_id', slide)
  }; // $FlowFixMe pipe issue with flow typing

  const viewedResourcesForContent = (0, _pipe2.default)([(0, _find2.default)(chapterContent), (0, _getOr2.default)([], 'resources')])(viewedResources);
  return (0, _isEmpty2.default)(lessons) || (0, _any2.default)(ref => (0, _includes2.default)(ref, (0, _map2.default)('ref', lessons)), viewedResourcesForContent);
};

exports.hasSeenLesson = hasSeenLesson;

const getVideoUri = id => state => (0, _get2.default)(['data', 'videos', 'entities', id, 'uri'], state);

exports.getVideoUri = getVideoUri;

const getVideoTracks = id => state => (0, _get2.default)(['data', 'videos', 'entities', id, 'tracks'], state);

exports.getVideoTracks = getVideoTracks;

const getPrevAnswer = state => {
  const progression = getCurrentProgression(state);
  return (0, _pipe2.default)((0, _get2.default)('state.allAnswers'), _last2.default, (0, _getOr2.default)([], 'answer'))(progression);
};

exports.getPrevAnswer = getPrevAnswer;

const isQuestionCtaDisabled = state => {
  const slide = getCurrentSlide(state);
  const isAdaptive = isContentAdaptive(state);
  const answers = slide ? getAnswerValues(slide, state) : [];
  const questionType = slide ? getQuestionType(slide) : null;
  return (0, _isEmpty2.default)(answers) || (0, _some2.default)(_isEmpty2.default, answers) || isAdaptive && answers.length > 1 && (0, _includes2.default)(questionType, ['qcm', 'qcmGraphic']);
};

exports.isQuestionCtaDisabled = isQuestionCtaDisabled;
//# sourceMappingURL=state-extract.js.map