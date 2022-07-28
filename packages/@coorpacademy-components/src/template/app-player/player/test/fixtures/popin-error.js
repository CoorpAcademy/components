import defaultSlide from '../../slides/test/fixtures/default';
import popinError from '../../../../../molecule/cm-popin/test/fixtures/error-with-close';

const playerProps = defaultSlide.props;
const popin = popinError.props;

export default {
  props: {
    player: playerProps,
    popin
  }
};
