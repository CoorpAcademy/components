import congrats from '../../../../../organism/review-congrats/test/fixtures/default';
import Header from '../../../../../organism/review-header/test/fixtures/steps-animation';
import EndReviewStackedSlides from '../../../../../organism/review-stacked-slides/test/fixtures/end-review';

import {ReviewPlayerProps} from '../../prop-types';

type Fixture = {
  props: ReviewPlayerProps;
};

const fixture: Fixture = {
  props: {
    header: Header.props,
    stack: EndReviewStackedSlides.props,
    congrats: congrats.props
  }
};

export default fixture;
