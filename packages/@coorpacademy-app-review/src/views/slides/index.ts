import findIndex from 'lodash/fp/findIndex';
import get from 'lodash/fp/get';
import includes from 'lodash/fp/includes';
import isEmpty from 'lodash/fp/isEmpty';
import {ProgressionFromAPI, UISlide} from '../../types/common';
import {SlideIndexes} from '../../common';
import {StoreState} from '../../reducers';
import {SlidesViewStaticProps, StepItem} from '../../types/views/slides';

type UISlidesState = {
  [key in SlideIndexes]: UISlide;
};

export const initialState: UISlidesState = {
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

const getSlideOrder = (slideRef: string, progression: ProgressionFromAPI): number => {
  const nextContentRef = progression.state.nextContent.ref;
  const answeredSlides = progression.state.slides;
  if (slideRef === nextContentRef && !includes(slideRef, answeredSlides)) {
    return progression.state.step.current - 1;
  }
  return findIndex(slideRef, answeredSlides);
};

const buildStackSlides = (state: StoreState): UISlidesState => {
  const currentSlideRef = state.ui.currentSlideRef;
  const progression = state.data.progression;

  if (!currentSlideRef || !progression) return initialState;
  const slide = get(currentSlideRef, state.data.slides);

  const slideOrder = getSlideOrder(currentSlideRef, progression);
  // eslint-disable-next-line no-console
  console.log(slide, progression, slideOrder);

  return initialState;
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

export const mapStateToSlidesProps = (state: StoreState): SlidesViewStaticProps | null => {
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
      slides: buildStackSlides(state),
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
