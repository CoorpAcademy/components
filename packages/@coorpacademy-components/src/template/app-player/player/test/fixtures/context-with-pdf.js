import SlidesHeader from '../../player-header/test/fixtures/learner';
import Context from '../../slides/slides-player/test/fixtures/context-with-pdf';

const headerProps = SlidesHeader.props;
const playerProps = Context.props;

export default {
  props: {
    header: headerProps,
    player: playerProps
  }
};
