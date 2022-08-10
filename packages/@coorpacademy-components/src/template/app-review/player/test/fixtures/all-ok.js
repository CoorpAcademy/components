import Header from '../../../../../organism/review-header/test/fixtures/all-questions-ok';
import AllCorrectStackedSlides from '../../../../../organism/review-stacked-slides/test/fixtures/all-ok';
import {apiQCMSlide0} from './initial-state';
import {apiQCMSlide1} from './one-fail';

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
    header: Header.props,
    slides: AllCorrectStackedSlides.props,
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
    }
  }
};
