import slides from '../../slides/test/fixtures/initial-state';
import {ViewNames} from '../../prop-types';

export default {
  props: {
    slides: slides.props,
    viewName: ViewNames.slides
  }
};
