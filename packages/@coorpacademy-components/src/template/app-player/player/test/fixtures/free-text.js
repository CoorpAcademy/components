import SlidesHeader from '../../player-header/test/fixtures/learner';
import FreeText from '../../slides/slides-player/test/fixtures/free-text';

const headerProps = SlidesHeader.props;
const playerProps = FreeText.props;

export default {
  props: {
    header: headerProps,
    player: playerProps
  }
};
