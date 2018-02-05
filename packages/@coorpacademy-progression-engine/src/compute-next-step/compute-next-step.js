// @flow
import map from 'lodash/fp/map';
import get from 'lodash/fp/get';
import find from 'lodash/fp/find';
import pipe from 'lodash/fp/pipe';
import head from 'lodash/fp/head';
import last from 'lodash/fp/last';
import filter from 'lodash/fp/filter';
import sortBy from 'lodash/fp/sortBy';
import isEqual from 'lodash/fp/isEqual';
import isEmpty from 'lodash/fp/isEmpty';
import shuffle from 'lodash/fp/shuffle';
import includes from 'lodash/fp/includes';
import findIndex from 'lodash/fp/findIndex';
import intersection from 'lodash/fp/intersection';
import type {
  State,
  Slide,
  Content,
  Config,
  Answer,
  AvailableContent,
  ChapterContent,
  AnswerRecord
} from '../types';
import type {ChapterRule, Instruction, Condition} from '../rule-engine/types';
import selectRule from '../rule-engine/select-rule';
import updateVariables from '../rule-engine/apply-instructions';

const hasNoMoreLives = (config: Config, state: State): boolean =>
  !config.livesDisabled && state.lives <= 0;
const hasRemainingLifeRequests = (state: State): boolean => state.remainingLifeRequests > 0;
const stepIsAlreadyExtraLife = (state: State): boolean => get('content.ref', state) === 'extraLife';

const hasRulesToApply = (chapterContent: ChapterContent | null): boolean => {
  return !!(
    chapterContent &&
    Array.isArray(chapterContent.rules) &&
    !isEmpty(chapterContent.rules)
  );
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

type PartialAction = PartialAnswerActionWithIsCorrect | PartialExtraLifeAcceptedAction | null;
type ChapterContentSelection = {
  currentChapterContent: ChapterContent | null,
  nextChapterContent: ChapterContent | null,
  temporaryNextContent: Content
};

const nextSlidePool = (
  config: Config,
  availableContent: AvailableContent,
  state: State
): ChapterContentSelection => {
  if (state.nextContent.type === 'chapter') {
    const content = find({ref: state.nextContent.ref}, availableContent) || null;
    return {
      currentChapterContent: content,
      nextChapterContent: content,
      temporaryNextContent: {type: 'slide', ref: ''}
    };
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

  const isChapterCompleted = slidesAnsweredForThisChapter.length >= config.slidesToComplete;
  const hasRules = hasRulesToApply(currentChapterPool);
  const shouldChangeChapter = !hasRules && isChapterCompleted;

  if (shouldChangeChapter) {
    return {
      currentChapterContent: currentChapterPool,
      nextChapterContent: availableContent[currentIndex + 1] || null,
      temporaryNextContent: {type: 'slide', ref: ''}
    };
  }

  return {
    currentChapterContent: currentChapterPool,
    nextChapterContent: currentChapterPool,
    temporaryNextContent: state.nextContent
  };
};

const _getChapterContent = (
  config: Config,
  availableContent: AvailableContent,
  state: State | null
): ChapterContentSelection => {
  const firstContent = head(availableContent);
  if (!state) {
    return {
      currentChapterContent: firstContent,
      nextChapterContent: firstContent,
      temporaryNextContent: {type: 'slide', ref: ''}
    };
  }
  if (state.slides.length === 0) {
    return {
      currentChapterContent: firstContent,
      nextChapterContent: firstContent,
      temporaryNextContent: state.nextContent
    };
  }
  return nextSlidePool(config, availableContent, state);
};

const getChapterContent = (
  config: Config,
  availableContent: AvailableContent,
  state: State | null
): ChapterContentSelection | null => {
  const res = _getChapterContent(config, availableContent, state);
  if (!res.currentChapterContent) {
    return null;
  }
  return res;
};

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

type Result = {
  nextContent: Content,
  instructions: Array<Instruction> | null,
  isCorrect: ?boolean
} | null;

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

const prepareStateToSwitchChapters = (
  chapterRule: ChapterRule,
  state: State | null
): State | null => {
  if (!state) {
    return state;
  }
  return updateVariables(chapterRule.instructions)({
    ...state,
    nextContent: chapterRule.destination
  });
};

const computeNextStepForNewChapter = (
  config: Config,
  state: State | null,
  chapterRule: ChapterRule,
  isCorrect: boolean,
  availableContent: AvailableContent
): Result => {
  // eslint-disable-next-line no-use-before-define
  const nextStep = computeNextStep(
    config,
    prepareStateToSwitchChapters(chapterRule, state),
    availableContent,
    null
  );

  if (!nextStep) {
    return null;
  }

  return {
    nextContent: nextStep.nextContent,
    instructions: chapterRule.instructions.concat(nextStep.instructions || []),
    isCorrect: getIsCorrect(isCorrect, chapterRule)
  };
};

const computeNextStep = (
  config: Config,
  _state: State | null,
  availableContent: AvailableContent,
  action: PartialAction
): Result => {
  const isCorrect = !!action && action.type === 'answer' && action.payload.isCorrect;
  const answer = (!!action && action.type === 'answer' && action.payload.answer) || [];
  const state = applyActionToState(_state, action);
  const chapterContent = getChapterContent(config, availableContent, state);

  if (!chapterContent) {
    return null;
  }

  const {currentChapterContent, nextChapterContent, temporaryNextContent} = chapterContent;
  const hasRules = hasRulesToApply(nextChapterContent);

  // If user has answered all questions, return success endpoint
  if (!hasRules && !nextChapterContent) {
    return {
      nextContent: {
        type: 'success',
        ref: 'successExitNode'
      },
      instructions: null,
      isCorrect
    };
  }

  if (hasRules) {
    const allAnswers: Array<AnswerRecord> = (!!state && state.allAnswers) || [];
    // $FlowFixMe nextChapterContent.rules = array not emtpy -> checked by hasRulesToApply
    const chapterRule = selectRule(nextChapterContent.rules, {
      ...state,
      nextContent: temporaryNextContent,
      allAnswers: [
        ...allAnswers,
        {
          slideRef: temporaryNextContent.ref,
          answer,
          isCorrect
        }
      ]
    });
    if (!chapterRule) {
      return null;
    }

    if (chapterRule.destination.type === 'chapter') {
      return computeNextStepForNewChapter(config, state, chapterRule, isCorrect, availableContent);
    }

    return {
      nextContent: chapterRule.destination,
      instructions: chapterRule.instructions,
      isCorrect: isEqual(currentChapterContent, nextChapterContent)
        ? getIsCorrect(isCorrect, chapterRule)
        : isCorrect
    };
  }

  if (
    nextChapterContent &&
    Array.isArray(nextChapterContent.slides) &&
    nextChapterContent.slides.length > 0
  ) {
    const stateWithDecrementedLives = decrementLivesOnIncorrectAnswer(action, {
      ...state,
      nextContent: temporaryNextContent
    });
    const nextContent = computeNextSlide(config, nextChapterContent, stateWithDecrementedLives);
    return {
      nextContent,
      instructions: null,
      isCorrect
    };
  }

  return null;
};

export default computeNextStep;
