import Qcm from '../../../../molecule/questions/qcm/test/fixtures/default';

const answerProps = Qcm.props;

export default {
  props: {
    question: {
      type: 'qcm',
      ...answerProps
    }
  }
};
