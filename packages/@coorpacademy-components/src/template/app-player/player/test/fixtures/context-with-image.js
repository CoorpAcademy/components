import SlidesHeader from '../../../../../molecule/slides/slides-header/test/fixtures/default';
import Context from '../../../../../molecule/slides/slides-player/test/fixtures/context-with-image';

const headerProps = SlidesHeader.props;
const playerProps = Context.props;

export default {
  props: {
    header: headerProps,
    player: playerProps
  }
};
