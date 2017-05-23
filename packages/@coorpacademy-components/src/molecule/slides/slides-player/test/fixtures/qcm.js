import Qcm from '../../../../questions/qcm/test/fixtures/default';
import Default from './default';

const answerProps = Qcm.props;

export default {
  props: {
    ...Default.props,
    answer: {
      type: 'qcm',
      ...answerProps
    }
  }
};
