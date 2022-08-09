import congratsProps from '../../../../../organism/review-congrats/test/fixtures/default';
import Header from '../../../../../organism/review-header/test/fixtures/steps-animation';
import EndReviewStackedSlides from '../../../../../organism/review-stacked-slides/test/fixtures/end-review';

export default {
  props: {
    slides: EndReviewStackedSlides.props,
    header: Header.props,
    reviewStatus: 'finished',
    apiSlides: {
      slideRefs: ['sli_N1XACJobn', 'sli_41~RSVclH'],
      values: {
        sli_N1XACJobn: {},
        'sli_41~RSVclH': {}
      }
    },
    progression: {
      _id: '62b1d1087aa12f00253f40e2',
      state: {
        isCorrect: true,
        nextContent: {
          type: 'success',
          ref: 'successExitNode'
        }
      }
    },
    congratsProps: congratsProps.props
  }
};
