import UnstackedSlides from '../../../../../organism/review-stacked-slides/test/fixtures/unstack';
import Header from '../../../../../organism/review-header/test/fixtures/first-question-current-right';

export default {
  props: {
    header: Header.props,
    stack: UnstackedSlides.props,
    reviewBackgroundAriaLabel: 'image background'
  }
};
