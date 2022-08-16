import RestackedSlides from '../../../../../organism/review-stacked-slides/test/fixtures/restack';
import Header from '../../../../../organism/review-header/test/fixtures/current-question-wrong';

export default {
  props: {
    header: Header.props,
    reviewBackgroundAriaLabel: 'image background',
    stack: RestackedSlides.props
  }
};
