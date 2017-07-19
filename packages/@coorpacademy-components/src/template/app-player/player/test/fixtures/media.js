import SlidesHeader from '../../../../../molecule/slides/slides-header/test/fixtures/default';
import Media from '../../../../../molecule/slides/slides-player/test/fixtures/media';

const headerProps = SlidesHeader.props;
const playerProps = Media.props;

export default {
  props: {
    header: headerProps,
    player: playerProps
  }
};
