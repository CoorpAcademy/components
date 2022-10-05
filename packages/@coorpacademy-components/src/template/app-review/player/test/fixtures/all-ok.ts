import Header from '../../../../../organism/review-header/test/fixtures/all-questions-ok';
import AllCorrectStackedSlides from '../../../../../organism/review-stacked-slides/test/fixtures/all-ok';

import {Props} from '../../prop-types';

type Fixture = {
  props: Props;
};

const fixture: Fixture = {
  props: {
    header: Header.props,
    stack: AllCorrectStackedSlides.props,
    reviewBackgroundAriaLabel: 'image background'
  }
};

export default fixture;
