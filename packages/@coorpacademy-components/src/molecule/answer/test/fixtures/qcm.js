import Qcm from '../../../../molecule/questions/qcm/test/fixtures/default';

const answerProps = Qcm.props;

export default {
  props: {
    answer: {
      type: 'qcm',
      ...answerProps
    }
  }
};
