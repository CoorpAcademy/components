import congrats from '../../../../../organism/review-congrats/test/fixtures/default';
import Header from '../../../../../organism/review-header/test/fixtures/steps-animation';
import EndReviewStackedSlides from '../../../../../organism/review-stacked-slides/test/fixtures/end-review';

import {Props} from '../../prop-types';

type Fixture = {
  props: Props;
};

const fixture: Fixture = {
  props: {
    header: Header.props,
    stack: EndReviewStackedSlides.props,
    reviewBackgroundAriaLabel: 'image background',
    congrats: congrats.props
  }
};

export default fixture;
