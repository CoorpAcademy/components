import SlidesHeader from '../../../player/slides/header/test/fixtures/learner';
import popinError from '../../../../../molecule/cm-popin/test/fixtures/error-with-close';

const headerProps = SlidesHeader.props;
const popinErrorProps = popinError.props;

export default {
  props: {
    header: headerProps,
    summary: {
      header: {
        type: 'popinEnd'
      }
    },
    popinError: popinErrorProps
  }
};
