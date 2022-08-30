import concat from 'lodash/fp/concat';
import findLast from 'lodash/fp/findLast';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import isEmpty from 'lodash/fp/isEmpty';
import last from 'lodash/fp/last';
import pipe from 'lodash/fp/pipe';
import reduce from 'lodash/fp/reduce';
import set from 'lodash/fp/set';
import slice from 'lodash/fp/slice';
import toInteger from 'lodash/fp/toInteger';
import {Dispatch} from 'redux';
import {ProgressionAnswerItem, ProgressionFromAPI} from '../../types/common';
import {SlideIndexes} from '../../common';
import {StoreState} from '../../reducers';
import {AnswerUI} from '../../types/slides';
import {postAnswer} from '../../actions/api/post-answer';
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

export type UISlide = {
  questionText?: string;
  answerUI?: AnswerUI;
  hidden?: boolean;
  position: number;
  animationType?: SlideUIAnimations;
  isCorrect?: boolean;
  endReview?: boolean;
  loading: boolean;
};

type SlidesStack = {
  [key in SlideIndexes]: UISlide;
};

export type CorrectionPopinProps = {
  klf: {
    label: string;
    onClick: Function;
    tooltip: string;
  };
  information: {
    label: string;
    message: string;
  };
  next: {
    label: string;
    ariaLabel: string;
  };
  successLabel: string;
  failureLabel: string;
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
    (acc: SlidesStack, uiSlide: UISlide, index: string) => {
      const slideRef = slideRefs[toInteger(index)];
      if (!slideRef) return set(index, uiSlide, acc);

      const slideFromAPI = get(slideRef, state.data.slides);
      if (!slideFromAPI) return set(index, uiSlide, acc);

      const answers = state.ui.answers;
      const {questionText, answerUI} = mapApiSlideToUi(dispatch)(slideFromAPI, answers);
      const parentContentTitle = getOr('', 'parentContentTitle.title', slideFromAPI);
      const parentContentType = getOr('', 'parentContentTitle.type', slideFromAPI);

      const updatedUiSlide = pipe(
        set('loading', false),
        set('questionText', questionText),
        set('answerUI', answerUI),
        set('parentContentTitle', `From "${parentContentTitle}" ${parentContentType}`) // TODO translate: -From- .... -Course/chapter-
        // TODO: Set position according to currentSlideRef et slideRefs (or maybe a value on the state ui.slidePositions !!)
      )(uiSlide);

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
  lastGivenAsnswer: ProgressionAnswerItem
): IconValue => {
  if (slideRef !== currentSlideRef) return lastGivenAnswerForSlide.isCorrect ? 'right' : 'wrong';

  if (lastGivenAsnswer.slideRef !== slideRef) return 'no-answer';
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
  if (isEmpty(allAnswers)) return defaultProps;
  const lastGivenAnswer = last(allAnswers) as ProgressionAnswerItem;

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

export const mapStateToSlidesProps = (state: StoreState, dispatch: Dispatch): SlidesViewProps => {
  return {
    header: {
      mode: '__revision_mode',
      skillName: '__agility',
      onQuitClick: (): void => {
        // eslint-disable-next-line no-console
        console.log('onQuitClick');
      },
      'aria-label': 'aria-header-wrapper',
      closeButtonAriaLabel: 'aria-close-button',
      steps: buildStepItems(state)
    },
    stack: {
      slides: buildStackSlides(state, dispatch),
      validateButton: {
        label: '__validate',
        disabled: !get('ui.slide.validateButton', state),
        onClick: (): void => {
          dispatch(postAnswer);
        }
      },
      correctionPopinProps: undefined,
      endReview: false
    },
    congratsProps: undefined
  };
};
