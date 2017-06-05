import SlidesHeader from '../../../../../molecule/slides/slides-header/test/fixtures/default';
import QcmImage from '../../../../../molecule/slides/slides-player/test/fixtures/qcm-image';

const headerProps = SlidesHeader.props;
const playerProps = QcmImage.props;

export default {
  props: {
    header: headerProps,
    player: playerProps
  }
};
