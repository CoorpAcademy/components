import SlidesHeader from '../../../../../molecule/slides/slides-header/test/fixtures/default';
import Picker from '../../../../../molecule/slides/slides-player/test/fixtures/picker';

const headerProps = SlidesHeader.props;
const playerProps = Picker.props;

export default {
  props: {
    header: headerProps,
    player: playerProps
  }
};
