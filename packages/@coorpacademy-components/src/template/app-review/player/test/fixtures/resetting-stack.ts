import headerProps from '../../../../../organism/review-header/test/fixtures/no-answered-question';
import {ReviewPlayerProps} from '../../prop-types';

type Fixture = {
  props: ReviewPlayerProps;
};

const fixture: Fixture = {
  props: {
    header: headerProps.props,
    stack: null
  }
};

export default fixture;
