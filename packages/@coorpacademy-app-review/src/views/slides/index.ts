import isEmpty from 'lodash/fp/isEmpty';
import {StepItem} from '../../reducers/ui/step-items';
import {StoreState} from '../../reducers';
import {SlidesViewStaticProps} from '../../types/views/slides';

const buildStepItemps = (_state: StoreState): StepItem[] => {
  const {progression} = _state.data;
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
  if (isEmpty(allAnswers)) return defaultProps;
  return [];
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
