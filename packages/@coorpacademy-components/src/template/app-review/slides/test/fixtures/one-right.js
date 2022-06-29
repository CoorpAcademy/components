import omit from 'lodash/fp/omit';
import initialState, {slideNumbers} from './initial-state';

const initialStateProps = initialState.props;

export default {
  props: {
    ...omit(['stepItems', 'finishedSlides', 'slides', 'slideValidationResult'], initialStateProps),
    slides: {
      ...initialStateProps.slides,
      0: {
        ...initialStateProps.slides[0],
        validationResult: 'success',
        endReview: false
      }
    },
    slideValidationResult: {
      slideNumber: 0,
      result: 'success',
      nextSlide: {
        questionText: initialStateProps.slides[0].questionText,
        answerUI: initialStateProps.slides[0].answerUI
      }
    },
    finishedSlides: {
      slideNumbers,
      0: true
    },
    stepItems: {
      ...initialStateProps.stepItems,
      0: {
        current: true,
        value: '1',
        icon: 'right'
      }
    }
  }
};
