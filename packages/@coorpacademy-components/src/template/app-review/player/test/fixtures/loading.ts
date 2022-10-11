import headerProps from '../../../../../organism/review-header/test/fixtures/no-answered-question';
import LoadingStackedSlides from '../../../../../organism/review-stacked-slides/test/fixtures/loading';

import {Props} from '../../prop-types';

type Fixture = {
  props: Props;
};

const fixture: Fixture = {
  props: {
    header: headerProps.props,
    stack: LoadingStackedSlides.props,
    reviewBackgroundAriaLabel: 'review BG Aria'
  }
};

export default fixture;