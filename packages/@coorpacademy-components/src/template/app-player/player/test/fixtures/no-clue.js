import SlidesHeader from '../../player-header/test/fixtures/learner';
import NoClue from '../../slides/slides-player/test/fixtures/no-clue';

const headerProps = SlidesHeader.props;
const playerProps = NoClue.props;

export default {
  props: {
    header: headerProps,
    player: playerProps
  }
};
