import headerProps from '../../../../../organism/review-header/test/fixtures/no-answered-question';
import DefaultStackedSlides from '../../../../../organism/review-stacked-slides/test/fixtures/initial-state';

export default {
  props: {
    header: headerProps.props,
    stack: DefaultStackedSlides.props,
    reviewBackgroundAriaLabel: 'review BG Aria'
  }
};
