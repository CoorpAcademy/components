import Answer from '../../../../../molecule/answer/test/fixtures/qcm-image';
import Default from './default';

export default {
  props: {
    ...Default.props,
    ...Answer.props
  }
};
