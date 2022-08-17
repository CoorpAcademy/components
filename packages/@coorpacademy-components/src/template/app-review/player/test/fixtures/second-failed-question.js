import Header from '../../../../../organism/review-header/test/fixtures/current-question-wrong';
import WrongStackedSlides from '../../../../../organism/review-stacked-slides/test/fixtures/second-wrong';

export default {
  props: {
    header: Header.props,
    stack: WrongStackedSlides.props,
    reviewBackgroundAriaLabel: 'image background'
  }
};
