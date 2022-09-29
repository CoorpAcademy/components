import headerProps from '../../../../../organism/review-header/test/fixtures/no-answered-question';
import DefaultStackedSlides from '../../../../../organism/review-stacked-slides/test/fixtures/initial-state';
import onReviewQuitPopin from '../../../../../molecule/cm-popin/test/fixtures/on-review-quit';

export default {
  props: {
    header: headerProps.props,
    stack: DefaultStackedSlides.props,
    reviewBackgroundAriaLabel: 'review BG Aria',
    quitPopin: onReviewQuitPopin.props
  }
};
