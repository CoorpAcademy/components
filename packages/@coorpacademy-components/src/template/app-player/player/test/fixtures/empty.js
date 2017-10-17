import SlidesHeader from '../../player-header/test/fixtures/learner';
import Load from '../../../../../molecule/slides/slides-player/test/fixtures/loading';

const headerProps = SlidesHeader.props;
const playerProps = Load.props;

export default {
  props: {
    header: headerProps,
    player: playerProps
  }
};
