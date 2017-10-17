import SlidesHeader from '../../player-header/test/fixtures/learner';
import QcmDrag from '../../../../../molecule/slides/slides-player/test/fixtures/qcm-drag';

const headerProps = SlidesHeader.props;
const playerProps = QcmDrag.props;

export default {
  props: {
    header: headerProps,
    player: playerProps
  }
};
