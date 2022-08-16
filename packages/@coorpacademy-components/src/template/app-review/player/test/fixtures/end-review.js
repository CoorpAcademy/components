import congratsProps from '../../../../../organism/review-congrats/test/fixtures/default';
import Header from '../../../../../organism/review-header/test/fixtures/steps-animation';
import EndReviewStackedSlides from '../../../../../organism/review-stacked-slides/test/fixtures/end-review';

export default {
  props: {
    header: Header.props,
    stack: EndReviewStackedSlides.props,
    reviewBackgroundAriaLabel: 'image background',
    congratsProps: congratsProps.props
  }
};
