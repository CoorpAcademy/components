import SlidesHeader from '../../player-header/test/fixtures/learner';
import QcmGraphic from '../../slides/slides-player/test/fixtures/qcm-graphic';

const headerProps = SlidesHeader.props;
const playerProps = QcmGraphic.props;

export default {
  props: {
    header: headerProps,
    player: playerProps
  }
};
