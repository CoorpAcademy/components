import omit from 'lodash/fp/omit';
import initialState, {apiQCMSlide0} from './initial-state';
import {apiQCMSlide1} from './one-fail';

const initialStateProps = initialState.props;

export const apiQCMSlide2 = {
  ...apiQCMSlide0,
  universalRef: 'sli_41~RSVcl7',
  id: 'sli_41~RSVcl7'
};

export const apiQCMSlide3 = {
  ...apiQCMSlide0,
  universalRef: 'sli_41~RSVcl8',
  id: 'sli_41~RSVcl8'
};

export const apiQCMSlide4 = {
  ...apiQCMSlide0,
  universalRef: 'sli_41~RSVcl9',
  id: 'sli_41~RSVcl9'
};

export default {
  props: {
    ...omit(
      ['stepItems', 'finishedSlides', 'uiSlides', 'progression', 'apiSlides'],
      initialStateProps
    ),
    apiSlides: {
      slideRefs: [
        'sli_N1XACJobn',
        'sli_41~RSVclH',
        'sli_41~RSVcl7',
        'sli_41~RSVcl8',
        'sli_41~RSVcl9'
      ],
      values: {
        sli_N1XACJobn: apiQCMSlide0,
        'sli_41~RSVclH': apiQCMSlide1,
        'sli_41~RSVcl7': apiQCMSlide2,
        'sli_41~RSVcl8': apiQCMSlide3,
        'sli_41~RSVcl9': apiQCMSlide4
      }
    },
    uiSlides: {
      '0': {
        hidden: true,
        position: 0
      },
      '1': {
        hidden: true,
        position: 0
      },
      '2': {
        hidden: true,
        position: 0
      },
      '3': {
        hidden: true,
        position: 0
      },
      '4': {
        ...initialStateProps.uiSlides['0'],
        hidden: false,
        position: 0,
        isCorrect: true,
        endReview: false
      }
    },
    progression: {
      _id: '62b1d1087aa12f00253f40e2',
      state: {
        isCorrect: true,
        nextContent: {
          type: 'slide',
          ref: 'sli_41~RSVcl9'
        }
      }
    },
    finishedSlides: {
      '0': true,
      '1': true,
      '2': true,
      '3': true,
      '4': true
    },
    stepItems: {
      '0': {
        current: false,
        value: '1',
        icon: 'right'
      },
      '1': {
        current: false,
        value: '2',
        icon: 'right'
      },
      '2': {
        current: false,
        value: '3',
        icon: 'right'
      },
      '3': {
        current: false,
        value: '4',
        icon: 'right'
      },
      '4': {
        current: true,
        value: '5',
        icon: 'right'
      }
    }
  }
};
