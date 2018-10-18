import SlidesHeader from '../../player-header/test/fixtures/learner';
import defaultSlide from '../../slides/slides-player/test/fixtures/default';

const headerProps = SlidesHeader.props;
const playerProps = defaultSlide.props;

export default {
  props: {
    header: headerProps,
    player: playerProps
  }
};
