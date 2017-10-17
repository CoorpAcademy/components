import SlidesHeader from '../../player-header/test/fixtures/learner';
import Clue from '../../../../../molecule/slides/slides-player/test/fixtures/clue';

const headerProps = SlidesHeader.props;
const playerProps = Clue.props;

export default {
  props: {
    header: headerProps,
    player: playerProps
  }
};
