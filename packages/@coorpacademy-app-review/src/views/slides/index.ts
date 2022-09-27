import concat from 'lodash/fp/concat';
import findLast from 'lodash/fp/findLast';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import last from 'lodash/fp/last';
import reduce from 'lodash/fp/reduce';
import set from 'lodash/fp/set';
import slice from 'lodash/fp/slice';
import toInteger from 'lodash/fp/toInteger';
import type {Dispatch} from 'redux';
import join from 'lodash/fp/join';
import type {ProgressionAnswerItem, ProgressionFromAPI} from '../../types/common';
import type {SlideIndexes} from '../../common';
import type {StoreState} from '../../reducers';
import type {AnswerUI} from '../../types/slides';
import {postAnswer} from '../../actions/api/post-answer';
import {nextSlide} from '../../actions/ui/next-slide';
import {mapApiSlideToUi} from './map-api-slide-to-ui';

const ICON_VALUES = {
  right: 'right',
  wrong: 'wrong',
  'no-answer': 'no-answer'
} as const;

type IconValue = keyof typeof ICON_VALUES;

type StepItem = {
  current: boolean;
  icon: IconValue;
  value: string;
};

type SlideUIAnimations = 'unstack' | 'restack';

export type ReviewSlide = {
  hidden: boolean;
  position: number;
  loading: boolean;
  showCorrectionPopin?: boolean;
  animateCorrectionPopin?: boolean;
  parentContentTitle?: string;
  questionText?: string;
  answerUI?: AnswerUI;
  animationType?: SlideUIAnimations;
};

type SlidesStack = {
  [key in SlideIndexes]: ReviewSlide;
};

type CorrectionPopinInformation = {
  label: string;
  message: string;
};

type CorrectionPopinKlf = {
  label: string;
  tooltip: string;
};

type CorrectionPopinNext = {
  label: string;
  ariaLabel: string;
  onClick: Function;
};

export type CorrectionPopinProps = {
  klf?: CorrectionPopinKlf;
  information: CorrectionPopinInformation;
  next: CorrectionPopinNext;
  resultLabel: string;
  type: 'right' | 'wrong';
};

export type SlidesViewProps = {
  header: {
    mode: string;
    skillName: string;
    onQuitClick: Function;
    'aria-label'?: string;
    closeButtonAriaLabel: string;
    steps: StepItem[];
  };
  stack: {
    slides: SlidesStack;
    validateButton: {
      label: string;
      disabled: boolean;
      onClick: Function;
    };
    correctionPopinProps?: CorrectionPopinProps;
    endReview: boolean;
  };
  reviewBackgroundAriaLabel?: string;
  congratsProps?: {
    'aria-label'?: string;
    'data-name'?: string;
    animationLottie: unknown;
    title: string;
    cardCongratsStar: unknown;
    cardCongratsRank: unknown;
    buttonRevising: {
      'aria-label'?: string;
      label: string;
      onClick: Function;
      type: string;
    };
    buttonRevisingSkill: {
      'aria-label'?: string;
      label: string;
      onClick: Function;
      type: string;
    };
  };
};

export const initialState: SlidesStack = {
  '0': {
    hidden: false,
    position: 0,
    loading: true
  },
  '1': {
    hidden: false,
    position: 1,
    loading: true
  },
  '2': {
    hidden: false,
    position: 2,
    loading: true
  },
  '3': {
    hidden: false,
    position: 3,
    loading: true
  },
  '4': {
    hidden: false,
    position: 4,
    loading: true
  }
};

const getProgressionSlidesRefs = (progression: ProgressionFromAPI): string[] => {
  if (progression.state.step.current < 5) {
    const slideRef = progression.state.nextContent.ref;
    return concat(progression.state.slides, [slideRef]);
  }
  return slice(0, 5, progression.state.slides);
};

const buildStackSlides = (state: StoreState, dispatch: Dispatch): SlidesStack => {
  const currentSlideRef = state.ui.currentSlideRef;
  const progression = state.data.progression;

  if (!currentSlideRef || !progression) return initialState;
  const slideRefs = getProgressionSlidesRefs(progression);

  // @ts-expect-error typescript does not support capped versions of lodash functions
  const stack = reduce.convert({cap: false})(
    (acc: SlidesStack, uiSlide: ReviewSlide, index: string): SlidesStack => {
      const slideRef = slideRefs[toInteger(index)];
      if (!slideRef) return set(index, uiSlide, acc);
      const slideFromAPI = get(slideRef, state.data.slides);
      if (!slideFromAPI) return set(index, uiSlide, acc);

      const answers = getOr([], ['ui', 'answers', slideRef], state);
      const {questionText, answerUI} = mapApiSlideToUi(dispatch)(slideFromAPI, answers);
      const parentContentTitle = getOr('', 'parentContentTitle.title', slideFromAPI);
      const parentContentType = getOr('', 'parentContentTitle.type', slideFromAPI);

      const isCurrentSlideRef = currentSlideRef === slideRef;
      const animateCorrectionPopin =
        isCurrentSlideRef && get(['ui', 'slide', slideRef, 'animateCorrectionPopin'], state);
      const showCorrectionPopin =
        isCurrentSlideRef && get(['ui', 'slide', slideRef, 'showCorrectionPopin'], state);
      const animationType = get(['ui', 'slide', slideRef, 'animationType'], state);

      const updatedUiSlide = {
        ...uiSlide,
        showCorrectionPopin,
        animateCorrectionPopin,
        loading: false,
        questionText,
        answerUI,
        parentContentTitle: `From "${parentContentTitle}" ${parentContentType}`,
        animationType
      };

      return set(index, updatedUiSlide, acc);
    },
    initialState,
    initialState
  );

  return stack;
};

const getIconForCurrentStep = (
  slideRef: string,
  lastGivenAnswerForSlide: ProgressionAnswerItem,
  currentSlideRef: string,
  lastGivenAnswer: ProgressionAnswerItem
): IconValue => {
  if (slideRef !== currentSlideRef) return lastGivenAnswerForSlide.isCorrect ? 'right' : 'wrong';

  if (lastGivenAnswer.slideRef !== slideRef) return 'no-answer';
  return lastGivenAnswerForSlide.isCorrect ? 'right' : 'wrong';
};

export const buildStepItems = (state: StoreState): StepItem[] => {
  const {progression} = state.data;
  const {currentSlideRef} = state.ui;
  if (!progression) return [];

  const defaultProps: StepItem[] = [
    {
      icon: 'no-answer',
      current: true,
      value: '1'
    },
    {
      icon: 'no-answer',
      current: false,
      value: '2'
    },
    {
      icon: 'no-answer',
      current: false,
      value: '3'
    },
    {
      icon: 'no-answer',
      current: false,
      value: '4'
    },
    {
      icon: 'no-answer',
      current: false,
      value: '5'
    }
  ];

  const slideRefs = getProgressionSlidesRefs(progression);
  const allAnswers = progression.state.allAnswers;
  const step = progression.state.step;
  const nextContentRef = progression.state.nextContent.ref;
  const lastGivenAnswer = last(allAnswers);
  if (!lastGivenAnswer) return defaultProps;

  const steps = defaultProps.map((stepItem, index): StepItem => {
    const slideRef = slideRefs[index];
    if (!slideRef) return stepItem; // non fecthed slide pour given index

    const lastGivenAnswerForSlide = findLast(answer => answer.slideRef === slideRef, allAnswers);
    // never answered slide
    if (!lastGivenAnswerForSlide) {
      return {
        ...stepItem,
        current: nextContentRef === currentSlideRef && step.current === index + 1
      };
    }

    // already answered slide, we computed based on the lastGivenAnswer
    return {
      ...stepItem,
      icon: getIconForCurrentStep(
        slideRef,
        lastGivenAnswerForSlide,
        currentSlideRef,
        lastGivenAnswer
      ),
      current: lastGivenAnswerForSlide.slideRef === currentSlideRef
    };
  });
  return steps;
};

const getCorrectionPopinProps =
  (dispatch: Dispatch) =>
  (isCorrect: boolean, correctAnswer: string[], klf: string): CorrectionPopinProps => {
    return {
      klf: isCorrect
        ? undefined
        : {
            label: '_klf',
            tooltip: klf
          },
      resultLabel: isCorrect ? '_right' : '_wrong',
      information: {
        label: isCorrect ? '_klf' : '_correctAnswer',
        message: isCorrect ? klf : join(',', correctAnswer)
      },
      next: {
        ariaLabel: '_correctionNextAriaLabel',
        label: '_correctionNextLabel',
        onClick: (): void => {
          dispatch(nextSlide);
        }
      },
      type: isCorrect ? 'right' : 'wrong'
    };
  };

export const mapStateToSlidesProps = (
  state: StoreState,
  dispatch: Dispatch,
  onQuitClick: Function
): SlidesViewProps => {
  const currentSlideRef = get(['ui', 'currentSlideRef'], state);
  const correction = get(['data', 'corrections', currentSlideRef], state);
  const isCorrect = get(['data', 'progression', 'state', 'isCorrect'], state);
  const klf = getOr('', ['data', 'slides', currentSlideRef, 'klf'], state);

  return {
    header: {
      mode: '__revision_mode',
      skillName: '__agility',
      onQuitClick,
      'aria-label': 'aria-header-wrapper',
      closeButtonAriaLabel: 'aria-close-button',
      steps: buildStepItems(state)
    },
    stack: {
      slides: buildStackSlides(state, dispatch),
      validateButton: {
        label: '__validate',
        disabled: !get(['ui', 'slide', currentSlideRef, 'validateButton'], state),
        onClick: (): void => {
          dispatch(postAnswer);
        }
      },
      correctionPopinProps:
        correction && getCorrectionPopinProps(dispatch)(isCorrect, correction.correctAnswer, klf),
      endReview: false
    },
    congratsProps: undefined
  };
};
