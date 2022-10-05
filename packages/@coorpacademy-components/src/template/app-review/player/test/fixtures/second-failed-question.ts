import Header from '../../../../../organism/review-header/test/fixtures/current-question-wrong';
import WrongStackedSlides from '../../../../../organism/review-stacked-slides/test/fixtures/second-wrong';

import {Props} from '../../prop-types';

type Fixture = {
  props: Props;
};

const fixture: Fixture = {
  props: {
    header: Header.props,
    stack: WrongStackedSlides.props,
    reviewBackgroundAriaLabel: 'image background'
  }
};

export default fixture;
