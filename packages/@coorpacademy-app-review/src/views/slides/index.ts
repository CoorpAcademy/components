/* eslint-disable @typescript-eslint/no-explicit-any */
import concat from 'lodash/fp/concat';

import get from 'lodash/fp/get';
import isEmpty from 'lodash/fp/isEmpty';
import pipe from 'lodash/fp/pipe';
import reduce from 'lodash/fp/reduce';
import set from 'lodash/fp/set';
import slice from 'lodash/fp/slice';
import toInteger from 'lodash/fp/toInteger';
import {Dispatch} from 'redux';
import {ProgressionFromAPI, UISlide} from '../../types/common';
import {SlideIndexes} from '../../common';
import {StoreState} from '../../reducers';
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
    animationLottie: any;
    title: string;
    cardCongratsStar: any;
    cardCongratsRank: any;
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
    position: 0
  },
  '1': {
    hidden: false,
    position: 1
  },
  '2': {
    hidden: false,
    position: 2
  },
  '3': {
    hidden: false,
    position: 3
  },
  '4': {
    hidden: false,
    position: 4
  }
};

const getProgressionSlidesRef = (progression: ProgressionFromAPI): string[] => {
  if (progression.state.step.current < 5) {
    const slideRef = progression.state.nextContent.ref;
    return concat([slideRef], progression.state.slides);
  }
  return slice(0, 5, progression.state.slides);
};

const buildStackSlides = (state: StoreState, dispatch: Dispatch): SlidesStack => {
  const currentSlideRef = state.ui.currentSlideRef;
  const progression = state.data.progression;

  if (!currentSlideRef || !progression) return initialState;
  const slideRefs = getProgressionSlidesRef(progression);

  // @ts-expect-error typescript does not support capped versions of lodash functions
  const stack = reduce.convert({cap: false})(
    (acc: SlidesStack, uiSlide: UISlide, index: string) => {
      const slideRef = slideRefs[toInteger(index)];
      if (!slideRef) return set(index, uiSlide, acc);

      const slideFromAPI = get(slideRef, state.data.slides);
      const {questionText, answerUI} = mapApiSlideToUi(slideFromAPI, dispatch);
      const updatedUiSlide = pipe(
        set(['questionText'], questionText),
        set(['answerUI'], answerUI),
        set(['parentContentTitle'], 'Parent Title') // TODO parentContentTitle + translate
        // TODO: Set position according to currentSlideRef et slideRefs (or maybe a value on the state ui.slidePositions !!)
      )(uiSlide);

      return set(index, updatedUiSlide, acc);
    },
    initialState,
    initialState
  );

  return stack;
};

const buildStepItemps = (state: StoreState): StepItem[] => {
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

  const allAnswers = progression.state.allAnswers;
  const step = progression.state.step;
  if (isEmpty(allAnswers)) return defaultProps;

  const steps = defaultProps.map((stepItem, index): StepItem => {
    const givenAnswer = allAnswers[index];
    if (!givenAnswer) {
      return {
        ...stepItem,
        current: step.current === index + 1
      };
    }

    return {
      ...stepItem,
      icon: givenAnswer.isCorrect ? 'right' : 'wrong',
      current: givenAnswer.slideRef === currentSlideRef
    };
  });
  return steps;
};

export const mapStateToSlidesProps =
  (dispatch: Dispatch) =>
  (state: StoreState): SlidesViewProps | null => {
    if (!state.data.slides) {
      return null;
    }

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
        steps: buildStepItemps(state)
      },
      stack: {
        slides: buildStackSlides(state, dispatch),
        validateButton: {
          label: '__validate',
          disabled: true,
          onClick: (): void => {
            // eslint-disable-next-line no-console
            console.log('TODO: validate question');
          }
        },
        correctionPopinProps: undefined,
        endReview: false
      },
      congratsProps: undefined
    };
  };
