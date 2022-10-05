import RestackedSlides from '../../../../../organism/review-stacked-slides/test/fixtures/restack';
import Header from '../../../../../organism/review-header/test/fixtures/current-question-wrong';

import {Props} from '../../prop-types';

type Fixture = {
  props: Props;
};

const fixture: Fixture = {
  props: {
    header: Header.props,
    reviewBackgroundAriaLabel: 'image background',
    stack: RestackedSlides.props
  }
};

export default fixture;
