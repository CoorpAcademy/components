import isEmpty from 'lodash/fp/isEmpty';
import {StoreState} from '../../reducers';
import {SlidesViewStaticProps, StepItem} from '../../types/views/slides';

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
      slides: state.ui.slides,
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
