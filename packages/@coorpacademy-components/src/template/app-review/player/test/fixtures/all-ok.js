import Header from '../../../../../organism/review-header/test/fixtures/all-questions-ok';
import AllCorrectStackedSlides from '../../../../../organism/review-stacked-slides/test/fixtures/all-ok';

export default {
  props: {
    header: Header.props,
    stack: AllCorrectStackedSlides.props,
    reviewBackgroundAriaLabel: 'image background'
  }
};
