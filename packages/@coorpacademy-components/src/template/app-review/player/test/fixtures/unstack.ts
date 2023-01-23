import UnstackedSlides from '../../../../../organism/review-stacked-slides/test/fixtures/unstack';
import Header from '../../../../../organism/review-header/test/fixtures/first-question-current-right';

import {ReviewPlayerProps} from '../../prop-types';

type Fixture = {
  props: ReviewPlayerProps;
};

const fixture: Fixture = {
  props: {
    header: Header.props,
    stack: UnstackedSlides.props
  }
};

export default fixture;
