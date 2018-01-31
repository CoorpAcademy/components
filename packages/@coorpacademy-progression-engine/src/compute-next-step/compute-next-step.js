// @flow
import map from 'lodash/fp/map';
import get from 'lodash/fp/get';
import find from 'lodash/fp/find';
import pipe from 'lodash/fp/pipe';
import head from 'lodash/fp/head';
import last from 'lodash/fp/last';
import filter from 'lodash/fp/filter';
import sortBy from 'lodash/fp/sortBy';
import shuffle from 'lodash/fp/shuffle';
import isEmpty from 'lodash/fp/isEmpty';
import includes from 'lodash/fp/includes';
import findIndex from 'lodash/fp/findIndex';
import intersection from 'lodash/fp/intersection';
import type {
  State,
  Slide,
  Content,
  Engine,
  EngineOptions,
  Config,
  Answer,
  AvailableContent,
  ChapterContent
} from '../types';
import getConfig from '../config';
import type {ChapterRule, Instruction, Condition} from '../rule-engine/types';
import selectRule from '../rule-engine/select-rule';
import updateVariables from '../rule-engine/apply-instructions';

const hasNoMoreLives = (config: Config, state: State): boolean =>
  !config.livesDisabled && state.lives <= 0;
const hasRemainingLifeRequests = (state: State): boolean => state.remainingLifeRequests > 0;
const stepIsAlreadyExtraLife = (state: State): boolean => get('content.ref', state) === 'extraLife';

const nextSlidePool = (
  config: Config,
  availableContent: AvailableContent,
  state: State
): ChapterContent | null => {
  if (state.nextContent.type === 'chapter') {
    return find({ref: state.nextContent.ref}, availableContent) || null;
  }
  const lastSlideRef = pipe(get('slides'), last)(state);
  const _currentIndex: number = findIndex(
    ({slides}: ChapterContent): boolean => !!find({_id: lastSlideRef}, slides),
    availableContent
  );
  const currentIndex = _currentIndex !== -1 ? _currentIndex : 0;
  const currentChapterPool: ChapterContent | null = availableContent[currentIndex] || null;
  const slidesAnsweredForThisChapter = intersection(
    state.slides,
    (currentChapterPool && map('_id', currentChapterPool.slides)) || []
  );

  if (slidesAnsweredForThisChapter.length >= config.slidesToComplete) {
    return availableContent[currentIndex + 1] || null;
  }

  return currentChapterPool;
};

const getChapterContent = (
  config: Config,
  availableContent: AvailableContent,
  state: State | null
): ChapterContent | null =>
  !state || isEmpty(get('slides', state))
    ? head(availableContent)
    : nextSlidePool(config, availableContent, state);

const sortByPosition = sortBy(
  (slide: Slide) => (typeof slide.position === 'number' ? -slide.position : 0)
);

const pickNextSlide = pipe(shuffle, sortByPosition, head);

const isTargetingIsCorrect = (condition: Condition): boolean =>
  condition.target.scope === 'slide' && condition.target.field === 'isCorrect';

const getIsCorrect = (isCorrect: boolean, chapterRule: ChapterRule): ?boolean => {
  if (chapterRule.conditions.some(isTargetingIsCorrect)) return isCorrect;
  return null;
};

const computeConfig = (engine: Engine, engineOptions: EngineOptions): Config => {
  const config = getConfig(engine);
  return {...config, ...engineOptions};
};

type Result = {
  nextContent: Content,
  instructions: Array<Instruction> | null,
  isCorrect: ?boolean
};

export type PartialAnswerActionWithIsCorrect = {
  type: 'answer',
  payload: {
    answer: Answer,
    content: Content,
    godMode: boolean,
    isCorrect: boolean
  }
};

export type PartialExtraLifeAcceptedAction = {
  type: 'extraLifeAccepted'
};

const computeNextSlide = (
  config: Config,
  chapterContent: ChapterContent,
  state: State | null
): Content => {
  if (state && hasNoMoreLives(config, state)) {
    return !stepIsAlreadyExtraLife(state) && hasRemainingLifeRequests(state)
      ? {type: 'node', ref: 'extraLife'}
      : {type: 'failure', ref: 'failExitNode'};
  }

  const remainingSlides = filter(
    pipe(get('_id'), (slideId: string) => !state || !includes(slideId, state.slides)),
    chapterContent.slides
  );
  return {
    type: 'slide',
    ref: pickNextSlide(remainingSlides)._id
  };
};

type PartialAction = PartialAnswerActionWithIsCorrect | PartialExtraLifeAcceptedAction | null;

const applyActionToState = (state: State | null, action: PartialAction): State | null => {
  if (!action || !state) {
    return state;
  }

  if (action.type === 'answer') {
    return {
      ...state,
      slides: state.slides.concat(state.nextContent.ref)
    };
  }

  if (action.type === 'extraLifeAccepted') {
    return {
      ...state,
      lives: state.lives + 1,
      remainingLifeRequests: state.remainingLifeRequests - 1
    };
  }

  return state;
};

const decrementLivesOnIncorrectAnswer = (
  action: PartialAction,
  state: State | null
): State | null => {
  // Should only be used in a non-adaptive context
  if (state && action && action.type === 'answer' && !action.payload.isCorrect) {
    return {
      ...state,
      lives: state.lives - 1
    };
  }
  return state;
};

const switchChapter = (chapterRule: ChapterRule, state: State | null): State | null => {
  if (!state) {
    return state;
  }
  return updateVariables(chapterRule.instructions)({
    ...state,
    nextContent: chapterRule.destination
  });
};

const selectRuleMatchingState = (
  rules: Array<ChapterRule>,
  _state: State | null
): ChapterRule | null => {
  const state =
    _state && _state.nextContent.type === 'chapter'
      ? {..._state, nextContent: {type: 'slide', ref: ''}}
      : _state;
  return selectRule(rules, state);
};

const computeNextStep = (
  engine: Engine,
  engineOptions: EngineOptions,
  _state: State | null,
  availableContent: AvailableContent,
  action: PartialAction
): Result => {
  const config = computeConfig(engine, engineOptions);
  const isCorrect = !!action && action.type === 'answer' && action.payload.isCorrect;
  const state = applyActionToState(_state, action);
  const chapterContent = getChapterContent(config, availableContent, state);
  // If user has answered all questions, return success endpoint
  if (!chapterContent) {
    return {
      nextContent: {
        type: 'success',
        ref: 'successExitNode'
      },
      instructions: null,
      isCorrect
    };
  }

  if (Array.isArray(chapterContent.rules) && chapterContent.rules.length > 0) {
    const chapterRule = selectRuleMatchingState(chapterContent.rules, state);
    if (!chapterRule) {
      throw new Error('Could not find a chapter rule to select.');
    }

    if (chapterRule.destination.type === 'chapter') {
      const res = computeNextStep(
        engine,
        engineOptions,
        switchChapter(chapterRule, state),
        availableContent,
        null
      );
      return {
        nextContent: res.nextContent,
        instructions: chapterRule.instructions.concat(res.instructions || []),
        isCorrect: getIsCorrect(isCorrect, chapterRule)
      };
    }

    return {
      nextContent: chapterRule.destination,
      instructions: chapterRule.instructions,
      isCorrect: getIsCorrect(isCorrect, chapterRule)
    };
  }

  if (Array.isArray(chapterContent.slides) && chapterContent.slides.length > 0) {
    const stateWithDecrementedLives = decrementLivesOnIncorrectAnswer(action, state);
    const nextContent = computeNextSlide(config, chapterContent, stateWithDecrementedLives);
    return {
      nextContent,
      instructions: null,
      isCorrect
    };
  }

  // TODO missing coverage
  throw new Error('Available content should have at least some slides or chapter rules');
};

export default computeNextStep;
