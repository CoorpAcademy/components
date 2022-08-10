import FirstCorrectStackedSlides from '../../../../../organism/review-stacked-slides/test/fixtures/first-correct';
import Header from '../../../../../organism/review-header/test/fixtures/first-question-current-right';
import {apiQCMSlide0} from './initial-state';
import {apiQCMSlide1} from './one-fail';

export default {
  props: {
    slides: FirstCorrectStackedSlides.props,
    header: Header.props,
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
    }
  }
};
