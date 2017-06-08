import SlidesHeader from '../../../../../molecule/slides/slides-header/test/fixtures/default';
import SuccessWithSubheader from '../../../../../organism/app-player/summary/test/fixtures/success-with-subheader';

const headerProps = SlidesHeader.props;
const summaryProps = SuccessWithSubheader.props;

export default {
  props: {
    header: headerProps,
    summary: summaryProps
  }
};
