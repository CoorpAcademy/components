import Loader from '../../../../../../atom/loader/test/fixtures/default';
import popinError from '../../../../../../molecule/cm-popin/test/fixtures/error-with-close';

const loaderProps = Loader.props;
const popinErrorProps = popinError.props;

export default {
  props: {
    ...loaderProps,
    popinError: popinErrorProps
  }
};
