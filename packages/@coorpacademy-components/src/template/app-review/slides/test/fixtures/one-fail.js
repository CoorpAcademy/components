import omit from 'lodash/fp/omit';
import initialState, {apiQCMSlide0} from './initial-state';

const initialStateProps = initialState.props;

export const apiQCMSlide1 = {
  ...apiQCMSlide0,
  universalRef: 'sli_41~RSVclH',
  id: 'sli_41~RSVclH'
};

export default {
  props: {
    ...omit(
      ['stepItems', 'finishedSlides', 'uiSlides', 'progression', 'apiSlides'],
      initialStateProps
    ),
    uiSlides: {
      ...initialStateProps.uiSlides,
      '0': {
        ...initialStateProps.uiSlides['0'],
        isCorrect: false,
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
      _id: '62b1d1087aa12f00253f40e1',
      state: {
        isCorrect: false,
        nextContent: {
          type: 'slide',
          ref: 'sli_41~RSVclH'
        }
      }
    },
    finishedSlides: {},
    stepItems: {
      ...initialStateProps.stepItems,
      '0': {
        current: true,
        value: '1',
        icon: 'wrong'
      }
    }
  }
};
