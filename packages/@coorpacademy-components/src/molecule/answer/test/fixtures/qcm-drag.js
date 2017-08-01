import QcmDrag from '../../../questions/qcm-drag/test/fixtures/default';

const answerProps = QcmDrag.props;

export default {
  props: {
    model: {
      type: 'qcmDrag',
      ...answerProps
    }
  }
};
