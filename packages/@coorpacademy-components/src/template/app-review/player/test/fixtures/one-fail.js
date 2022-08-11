import Header from '../../../../../organism/review-header/test/fixtures/current-question-wrong';
import WrongStackedSlides from '../../../../../organism/review-stacked-slides/test/fixtures/wrong';
import {apiQCMSlide0} from './initial-state';

export const apiQCMSlide1 = {
  ...apiQCMSlide0,
  universalRef: 'sli_41~RSVclH',
  id: 'sli_41~RSVclH'
};

export default {
  props: {
    header: {
      ...Header.props,
      steps: [
        {
          icon: 'right',
          current: false,
          value: '1'
        },
        {
          icon: 'right',
          current: false,
          value: '2'
        },
        {
          icon: 'wrong',
          current: true,
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
      ]
    },
    stack: WrongStackedSlides.props,
    reviewBackgroundAriaLabel: 'image background',

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
    }
  }
};
