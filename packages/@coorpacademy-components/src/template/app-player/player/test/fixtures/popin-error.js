import defaultSlide from '../../slides/test/fixtures/default';
import popin from '../../../../../molecule/cm-popin/test/fixtures/error-with-close';

const playerProps = defaultSlide.props;
const popinError = popin.props;

export default {
  props: {
    player: playerProps,
    popinError
  }
};
