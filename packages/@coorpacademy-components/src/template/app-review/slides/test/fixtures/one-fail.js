import omit from 'lodash/fp/omit';
import initialState, {slideNumbers} from './initial-state';

const initialStateProps = initialState.props;

export default {
  props: {
    ...omit(['stepItems', 'finishedSlides', 'slides', 'progression'], initialStateProps),
    slides: {
      ...initialStateProps.slides,
      0: {
        ...initialStateProps.slides[0],
        isCorrect: false,
        endReview: false
      }
    },
    progression: {
      slideNumber: 0,
      isCorrect: false,
      nextSlide: {
        questionText: initialStateProps.slides[0].questionText,
        answerUI: initialStateProps.slides[0].answerUI
      }
    },
    finishedSlides: {
      slideNumbers
    },
    stepItems: {
      ...initialStateProps.stepItems,
      0: {
        current: true,
        value: '1',
        icon: 'wrong'
      }
    }
  }
};
