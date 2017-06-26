import Qcm from '../../../../molecule/questions/qcm/test/fixtures/default';

const answerProps = Qcm.props;

export default {
  props: {
    model: {
      type: 'qcm',
      ...answerProps
    }
  }
};
