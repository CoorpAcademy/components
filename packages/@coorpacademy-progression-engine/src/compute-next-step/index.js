// @flow
import map from 'lodash/fp/map';
import get from 'lodash/fp/get';
import find from 'lodash/fp/find';
import pipe from 'lodash/fp/pipe';
import shuffle from 'lodash/fp/shuffle';
import first from 'lodash/fp/first';
import sortBy from 'lodash/fp/sortBy';
import negate from 'lodash/fp/negate';
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
  Config,
  Answer,
  AnswerAction,
  IsCorrect
} from '../types';
import checkAnswer from '../check-answer';
import updateState from '../update-state';
import getConfig from '../config';
import type {ChapterRule, Instruction, Condition} from './rule-engine/types';
import selectRule from './rule-engine/select-rule';

const isAlive = (state: State): boolean => state.lives > 0;
const hasRemainingLifeRequests = (state: State): boolean => state.remainingLifeRequests > 0;
const stepIsAlreadyExtraLife = (state: State): boolean => get('content.ref', state) === 'extraLife';

type SlidePool = {
  chapterId: string,
  slides: Array<Slide>
};

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

const getSlidePool = (config: Config, slidePools: Array<SlidePool>, state: State): SlidePool =>
  isEmpty(get('slides', state)) ? head(slidePools) : nextSlidePool(config, slidePools, state);

const sortByPosition = sortBy(
  (slide: Slide) => (typeof slide.position === 'number' ? -slide.position : 0)
);

const pickNextSlide = pipe(shuffle, sortByPosition, head);

export default function computeNextStep(
  engine: Engine,
  slidePools: Array<SlidePool>,
  state: State
): Content {
  const config = (getConfig(engine): Config);
  // if no more lives, return failure endpoint
  if (!isAlive(state)) {
    return !stepIsAlreadyExtraLife(state) && hasRemainingLifeRequests(state)
      ? {ref: 'extraLife', type: 'node'}
      : {ref: 'failExitNode', type: 'failure'};
  }

  const slidePool = getSlidePool(config, slidePools, state);

  // If user has answered all questions, return success endpoint
  if (!slidePool) {
    return {
      ref: 'successExitNode',
      type: 'success'
    };
  }

  const remainingSlides = filter(
    pipe(get('_id'), negate((slideId: string) => includes(slideId, state.slides))),
    slidePool.slides
  );
  const nextSlide = pipe(pickNextSlide, get('_id'))(remainingSlides);

  // with next slide return content object
  return {
    ref: nextSlide,
    type: 'slide'
  };
}

type ComputeNextStepOptions = {
  currentSlide: Slide,
  answer: Answer,
  godMode: $PropertyType<$PropertyType<AnswerAction, 'payload'>, 'godMode'>,

  slidePools: Array<SlidePool>,
  chapterRules: ?Array<ChapterRule>
};

type ComputeNextStepReturn = {
  nextContent: Content,
  instructions: ?Array<Instruction>,
  isCorrect: ?IsCorrect
};

const isTargetingIsCorrect = (condition: Condition): boolean =>
  condition.target.scope === 'slide' && condition.target.field === 'isCorrect';

const getIsCorrect = (isCorrect: ?IsCorrect, chapterRule: ChapterRule): ?IsCorrect => {
  if (chapterRule.conditions.some(isTargetingIsCorrect)) return isCorrect;
  return null;
};

const EMPTY_NODE = {
  type: 'node',
  ref: 'empty'
};

export const newComputeNextStep = (
  engine: Engine,
  state: State,
  params: ComputeNextStepOptions
): ?ComputeNextStepReturn => {
  const {chapterRules, currentSlide, answer} = params;
  const isCorrect = checkAnswer(engine, currentSlide.question, answer);

  const nextState = updateState(engine, state, [
    {
      type: 'answer',
      payload: {
        content: state.nextContent,
        nextContent: EMPTY_NODE,
        answer,
        isCorrect
      }
    }
  ]);

  if (Array.isArray(chapterRules) && chapterRules.length > 0) {
    const chapterRule = selectRule(chapterRules, nextState);

    if (!chapterRule) return null;

    return {
      nextContent: chapterRule.destination,
      instructions: chapterRule.instructions,
      isCorrect: getIsCorrect(isCorrect, chapterRule)
    };
  }

  const {slidePools} = params;
  const nextContent = computeNextStep(engine, slidePools, nextState);

  return {
    nextContent,
    instructions: null,
    isCorrect
  };
};
