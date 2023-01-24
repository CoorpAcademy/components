import RestackedSlides from '../../../../../organism/review-stacked-slides/test/fixtures/restack';
import Header from '../../../../../organism/review-header/test/fixtures/current-question-wrong';

import {ReviewPlayerProps} from '../../prop-types';

type Fixture = {
  props: ReviewPlayerProps;
};

const fixture: Fixture = {
  props: {
    header: Header.props,
    stack: RestackedSlides.props
  }
};

export default fixture;
