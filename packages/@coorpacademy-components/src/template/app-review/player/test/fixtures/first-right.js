import FirstCorrectStackedSlides from '../../../../../organism/review-stacked-slides/test/fixtures/first-correct';
import Header from '../../../../../organism/review-header/test/fixtures/first-question-current-right';

export default {
  props: {
    header: Header.props,
    stack: FirstCorrectStackedSlides.props,
    reviewBackgroundAriaLabel: 'image background'
  }
};
