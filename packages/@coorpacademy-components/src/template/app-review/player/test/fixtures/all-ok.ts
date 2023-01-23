import Header from '../../../../../organism/review-header/test/fixtures/all-questions-ok';
import AllCorrectStackedSlides from '../../../../../organism/review-stacked-slides/test/fixtures/all-ok';

import {ReviewPlayerProps} from '../../prop-types';

type Fixture = {
  props: ReviewPlayerProps;
};

const fixture: Fixture = {
  props: {
    header: Header.props,
    stack: AllCorrectStackedSlides.props
  }
};

export default fixture;
