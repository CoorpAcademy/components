import SlidesHeader from '../../../../../molecule/slides/slides-header/test/fixtures/default';
import SlideError from '../../../../../molecule/slides/slides-player/test/fixtures/error';

const headerProps = SlidesHeader.props;
const playerProps = SlideError.props;

export default {
  props: {
    header: headerProps,
    player: playerProps
  }
};
