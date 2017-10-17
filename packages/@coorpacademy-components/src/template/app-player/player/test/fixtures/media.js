import SlidesHeader from '../../player-header/test/fixtures/learner';
import Media from '../../../../../molecule/slides/slides-player/test/fixtures/media';

const headerProps = SlidesHeader.props;
const playerProps = Media.props;

export default {
  props: {
    header: headerProps,
    player: playerProps
  }
};
