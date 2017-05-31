import SlidesHeader from '../../../../../molecule/slides/slides-header/test/fixtures/default';
import QuestionRange from '../../../../../molecule/slides/slides-player/test/fixtures/range';

const headerProps = SlidesHeader.props;
const playerProps = QuestionRange.props;

export default {
  props: {
    header: headerProps,
    player: playerProps
  }
};
