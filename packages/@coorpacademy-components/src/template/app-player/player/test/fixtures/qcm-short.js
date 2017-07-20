import SlidesHeader from '../../../../../molecule/slides/slides-header/test/fixtures/default';
import Qcm from '../../../../../molecule/slides/slides-player/test/fixtures/qcm-short';

const headerProps = SlidesHeader.props;
const playerProps = Qcm.props;

export default {
  props: {
    header: headerProps,
    player: playerProps
  }
};
