import slides from '../../player/test/fixtures/initial-state';
import {Props} from '../../prop-types';

type Fixture = {
  props: Props;
};

const fixture: Fixture = {
  props: {
    slides: slides.props,
    viewName: 'slides'
  }
};

export default fixture;
