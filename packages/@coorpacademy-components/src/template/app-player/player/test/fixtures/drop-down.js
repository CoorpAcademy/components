import SlidesHeader from '../../player-header/test/fixtures/learner';
import DropDown from '../../../../../molecule/slides/slides-player/test/fixtures/drop-down';

const headerProps = SlidesHeader.props;
const playerProps = DropDown.props;

export default {
  props: {
    header: headerProps,
    player: playerProps
  }
};
