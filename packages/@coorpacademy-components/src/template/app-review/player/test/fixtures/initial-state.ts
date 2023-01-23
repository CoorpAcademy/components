import headerProps from '../../../../../organism/review-header/test/fixtures/no-answered-question';
import DefaultStackedSlides from '../../../../../organism/review-stacked-slides/test/fixtures/initial-state';
import {ReviewPlayerProps} from '../../prop-types';

type Fixture = {
  props: ReviewPlayerProps;
};

const fixture: Fixture = {
  props: {
    header: headerProps.props,
    stack: DefaultStackedSlides.props
  }
};

export default fixture;
