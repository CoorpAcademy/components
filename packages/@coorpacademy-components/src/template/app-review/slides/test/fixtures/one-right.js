import omit from 'lodash/fp/omit';
import initialState, {apiQCMSlide0} from './initial-state';
import {apiQCMSlide1} from './one-fail';

const initialStateProps = initialState.props;

export default {
  props: {
    ...omit(['stepItems', 'finishedSlides', 'uiSlides', 'progression'], initialStateProps),
    uiSlides: {
      ...initialStateProps.uiSlides,
      '0': {
        ...initialStateProps.uiSlides['0'],
        isCorrect: true,
        endReview: false
      }
    },
    apiSlides: {
      slideRefs: ['sli_N1XACJobn', 'sli_41~RSVclH'],
      values: {
        sli_N1XACJobn: apiQCMSlide0,
        'sli_41~RSVclH': apiQCMSlide1
      }
    },
    progression: {
      _id: '62b1d1087aa12f00253f40e2',
      state: {
        isCorrect: true,
        nextContent: {
          type: 'slide',
          ref: 'sli_41~RSVclH'
        }
      }
    },
    finishedSlides: {
      '0': true
    },
    stepItems: {
      ...initialStateProps.stepItems,
      '0': {
        current: true,
        value: '1',
        icon: 'right'
      }
    }
  }
};
