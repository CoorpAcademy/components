import SlidesHeader from '../../../../../molecule/slides/slides-header/test/fixtures/default';
import QcmGraphic from '../../../../../molecule/slides/slides-player/test/fixtures/qcm-graphic';

const headerProps = SlidesHeader.props;
const playerProps = QcmGraphic.props;

export default {
  props: {
    header: headerProps,
    player: playerProps
  }
};
