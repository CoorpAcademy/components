import SlidesHeader from '../../player-header/test/fixtures/learner';
import QuestionRange from '../../../../../molecule/slides/slides-player/test/fixtures/range';

const headerProps = SlidesHeader.props;
const playerProps = QuestionRange.props;

export default {
  props: {
    header: headerProps,
    player: playerProps
  }
};
