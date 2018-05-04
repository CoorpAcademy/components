import SlidesHeader from '../../player-header/test/fixtures/learner';
import Context from '../../slides/slides-player/test/fixtures/context';

const headerProps = SlidesHeader.props;
const playerProps = Context.props;

export default {
  props: {
    header: headerProps,
    player: {
      ...playerProps,
      backgroundUrl: 'http://imagizer.imageshack.us/a/img924/9120/zxtxPV.jpg'
    }
  }
};
