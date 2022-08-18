import concat from 'lodash/fp/concat';
import findIndex from 'lodash/fp/findIndex';
import get from 'lodash/fp/get';
import includes from 'lodash/fp/includes';
import isEmpty from 'lodash/fp/isEmpty';
import pipe from 'lodash/fp/pipe';
import {reduce} from 'lodash';
import set from 'lodash/fp/set';
import slice from 'lodash/fp/slice';
import toInteger from 'lodash/fp/toInteger';
import {ProgressionFromAPI, UISlide} from '../../types/common';
import {SlideIndexes} from '../../common';
import {StoreState} from '../../reducers';
import {SlidesViewStaticProps, StepItem} from '../../types/views/slides';
import {mapApiSlideToUi} from '../../helpers/map-api-slide-to-ui';

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

const getProgressionSlidesRef = (progression: ProgressionFromAPI): string[] => {
  if (progression.state.step.current < 5) {
    const slideRef = progression.state.nextContent.ref;
    return concat([slideRef], progression.state.slides);
  }
  return slice(0, 5, progression.state.slides);
};

const buildStackSlides = (state: StoreState): UISlidesState => {
  const currentSlideRef = state.ui.currentSlideRef;
  const progression = state.data.progression;

  if (!currentSlideRef || !progression) return initialState;
  const slideRefs = getProgressionSlidesRef(progression);

  const stack = reduce(
    initialState,
    (acc, uiSlide, index) => {
      const slideRef = slideRefs[toInteger(index)];
      if (!slideRef) return set(`${index}`, uiSlide, acc);

      const slideFromAPI = get(slideRef, state.data.slides);
      const {questionText, answerUI} = mapApiSlideToUi(slideFromAPI);
      const updatedUiSlide = pipe(
        set(['questionText'], questionText),
        set(['answerUI'], answerUI),
        set(['parentContentTitle'], 'Parent Title') // TODO parentContentTitle + translate
        // TODO: Set position according to currentSlideRef et slideRefs (or maybe a value on the state ui.slidePositions !!)
      )(uiSlide);

      return set(`${index}`, updatedUiSlide, acc);
    },
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
