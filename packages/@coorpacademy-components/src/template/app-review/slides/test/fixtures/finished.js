import omit from 'lodash/fp/omit';
import initialState, {slideNumbers} from './initial-state';

const initialStateProps = initialState.props;

export default {
  props: {
    ...omit(
      ['stepItems', 'finishedSlides', 'slides', 'slideValidationResult', 'reviewStatus'],
      initialStateProps
    ),
    reviewStatus: 'finished',
    slides: {
      slideNumbers,
      0: {
        hidden: true,
        position: 0
      },
      1: {
        hidden: true,
        position: 0
      },
      2: {
        hidden: true,
        position: 0
      },
      3: {
        hidden: true,
        position: 0
      },
      4: {
        hidden: true,
        position: 0
      }
    },
    progression: {
      slideNumber: 4,
      isCorrect: true,
      exitNode: 'successExitNode'
    },
    finishedSlides: {
      slideNumbers,
      0: true,
      1: true,
      2: true,
      3: true,
      4: true
    },
    stepItems: {
      0: {
        current: false,
        value: '1',
        icon: 'right'
      },
      1: {
        current: false,
        value: '2',
        icon: 'right'
      },
      2: {
        current: false,
        value: '3',
        icon: 'right'
      },
      3: {
        current: false,
        value: '4',
        icon: 'right'
      },
      4: {
        current: false,
        value: '5',
        icon: 'right'
      }
    }
  }
};
