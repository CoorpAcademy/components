import slides from '../../player/test/fixtures/initial-state';
import {AppReviewProps} from '../../prop-types';

type Fixture = {
  props: AppReviewProps;
};

const fixture: Fixture = {
  props: {
    slides: slides.props,
    viewName: 'slides'
  }
};

export default fixture;
