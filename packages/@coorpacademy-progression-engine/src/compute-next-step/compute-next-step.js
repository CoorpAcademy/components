// @flow
import map from 'lodash/fp/map';
import get from 'lodash/fp/get';
import find from 'lodash/fp/find';
import pipe from 'lodash/fp/pipe';
import shuffle from 'lodash/fp/shuffle';
import first from 'lodash/fp/first';
import sortBy from 'lodash/fp/sortBy';
import head from 'lodash/fp/head';
import isEmpty from 'lodash/fp/isEmpty';
import indexOf from 'lodash/fp/indexOf';
import last from 'lodash/fp/last';
import filter from 'lodash/fp/filter';
import includes from 'lodash/fp/includes';
import intersection from 'lodash/fp/intersection';
import type {
  State,
  Slide,
  Content,
  Engine,
  EngineOptions,
  Config,
  Answer,
  SlidePool,
  AvailableContent
} from '../types';
import getConfig from '../config';
import type {ChapterRule, Instruction, Condition} from '../rule-engine/types';
import selectRule from '../rule-engine/select-rule';

const hasNoMoreLives = (config: Config, state: State, isCorrect: boolean): boolean =>
  !config.livesDisabled && (state.lives <= 0 || (state.lives === 1 && !isCorrect));
const hasRemainingLifeRequests = (state: State): boolean => state.remainingLifeRequests > 0;
const stepIsAlreadyExtraLife = (state: State): boolean => get('content.ref', state) === 'extraLife';

const nextSlidePool = (config: Config, slidePools: Array<SlidePool>, state: State): SlidePool => {
  const lastSlideRef = pipe(get('slides'), last)(state);
  const currentChapterPool =
    find(({slides}) => find({_id: lastSlideRef}, slides), slidePools) || first(slidePools);
  const slidesAnsweredForThisChapter = intersection(
    state.slides,
    map('_id')(currentChapterPool.slides)
  );

  if (slidesAnsweredForThisChapter.length >= config.slidesToComplete) {
    const indexOfCurrentChapter = indexOf(
      currentChapterPool.chapterId,
      map('chapterId', slidePools)
    );
    return slidePools[indexOfCurrentChapter + 1];
  }

  return currentChapterPool;
};

const getSlidePool = (
  config: Config,
  slidePools: Array<SlidePool>,
  state: State | null
): SlidePool =>
  !state || isEmpty(get('slides', state))
    ? head(slidePools)
    : nextSlidePool(config, slidePools, state);

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
  slidePools: Array<SlidePool>,
  isCorrect: boolean,
  state: State | null
): Content => {
  if (state && hasNoMoreLives(config, state, isCorrect)) {
    return !stepIsAlreadyExtraLife(state) && hasRemainingLifeRequests(state)
      ? {type: 'node', ref: 'extraLife'}
      : {type: 'failure', ref: 'failExitNode'};
  }

  const slidePool = getSlidePool(config, slidePools, state);

  // If user has answered all questions, return success endpoint
  if (!slidePool) {
    return {
      type: 'success',
      ref: 'successExitNode'
    };
  }

  const remainingSlides = filter(
    pipe(get('_id'), (slideId: string) => !state || !includes(slideId, state.slides)),
    slidePool.slides
  );
  return {
    type: 'slide',
    ref: pickNextSlide(remainingSlides)._id
  };
};

type PartialAction = PartialAnswerActionWithIsCorrect | PartialExtraLifeAcceptedAction | null;

const applyActionToState = (state: State | null, action: PartialAction): State | null => {
  if (!action || action.type !== 'extraLifeAccepted' || !state) {
    return state;
  }
  return {
    ...state,
    lives: state.lives + 1,
    remainingLifeRequests: state.remainingLifeRequests - 1
  };
};

const computeNextStep = (
  engine: Engine,
  engineOptions: EngineOptions,
  _state: State | null,
  {slidePools, chapterRulePool}: AvailableContent,
  action: PartialAction
): Result => {
  const config = computeConfig(engine, engineOptions);
  const isCorrect = !!action && action.type === 'answer' && action.payload.isCorrect;
  const state = applyActionToState(_state, action);

  if (Array.isArray(chapterRulePool) && chapterRulePool.length > 0) {
    // TODO Add coverage
    const chapterRule = selectRule(chapterRulePool[0].rules, state);
    if (!chapterRule) {
      throw new Error('Could not find a chapter rule to select.');
    }

    return {
      nextContent: chapterRule.destination,
      instructions: chapterRule.instructions,
      isCorrect: getIsCorrect(isCorrect, chapterRule)
    };
  }

  if (Array.isArray(slidePools) && slidePools.length > 0) {
    const nextContent = computeNextSlide(config, slidePools, isCorrect, state);
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
