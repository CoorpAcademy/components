import headerProps from '../../../../../organism/review-header/test/fixtures/no-answered-question';
import LoadingStackedSlides from '../../../../../organism/review-stacked-slides/test/fixtures/loading';

import {ReviewPlayerProps} from '../../prop-types';

type Fixture = {
  props: ReviewPlayerProps;
};

const fixture: Fixture = {
  props: {
    header: headerProps.props,
    stack: LoadingStackedSlides.props
  }
};

export default fixture;
