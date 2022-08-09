import RestackedSlides from '../../../../../organism/review-stacked-slides/test/fixtures/restack';
import Header from '../../../../../organism/review-header/test/fixtures/current-question-wrong';
import {apiQCMSlide0} from './initial-state';

export default {
  props: {
    ...RestackedSlides.props,
    header: Header.props,
    apiSlides: {
      slideRefs: ['sli_N1XACJobn'],
      values: {
        sli_N1XACJobn: apiQCMSlide0
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
