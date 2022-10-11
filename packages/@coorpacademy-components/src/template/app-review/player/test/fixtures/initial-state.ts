import headerProps from '../../../../../organism/review-header/test/fixtures/no-answered-question';
import DefaultStackedSlides from '../../../../../organism/review-stacked-slides/test/fixtures/initial-state';
import {Props} from '../../prop-types';

type Fixture = {
  props: Props;
};

const fixture: Fixture = {
  props: {
    header: headerProps.props,
    stack: DefaultStackedSlides.props,
    reviewBackgroundAriaLabel: 'review BG Aria'
  }
};

export default fixture;