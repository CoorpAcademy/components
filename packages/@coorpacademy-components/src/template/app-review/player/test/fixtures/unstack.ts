import UnstackedSlides from '../../../../../organism/review-stacked-slides/test/fixtures/unstack';
import Header from '../../../../../organism/review-header/test/fixtures/first-question-current-right';

import {Props} from '../../prop-types';

type Fixture = {
  props: Props;
};

const fixture: Fixture = {
  props: {
    header: Header.props,
    stack: UnstackedSlides.props,
    reviewBackgroundAriaLabel: 'image background'
  }
};

export default fixture;
