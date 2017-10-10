import SlidesHeader from '../../player-header/test/fixtures/learner';
import Qcm from '../../../../../molecule/slides/slides-player/test/fixtures/qcm-short';

const headerProps = SlidesHeader.props;
const playerProps = Qcm.props;

export default {
  props: {
    header: headerProps,
    player: playerProps
  }
};
