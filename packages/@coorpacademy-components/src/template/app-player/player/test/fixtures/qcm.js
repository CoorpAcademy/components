import SlidesHeader from '../../player-header/test/fixtures/learner';
import Qcm from '../../slides/slides-player/test/fixtures/qcm';

const headerProps = SlidesHeader.props;
const playerProps = Qcm.props;

export default {
  props: {
    header: headerProps,
    player: playerProps
  }
};
