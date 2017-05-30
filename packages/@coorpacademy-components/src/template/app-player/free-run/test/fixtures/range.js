import SlidesHeader from '../../../../../molecule/slides/slides-header/test/fixtures/default';
import Range from '../../../../../molecule/slides/slides-player/test/fixtures/range';

const headerProps = SlidesHeader.props;
const playerProps = Range.props;

export default {
  props: {
    header: headerProps,
    player: playerProps
  }
};
