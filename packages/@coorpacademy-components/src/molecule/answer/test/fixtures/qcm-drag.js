import QcmDrag from '../../../questions/qcm-drag/test/fixtures/default';

const answerProps = QcmDrag.props;

export default {
  props: {
    model: {
      ...answerProps,
      type: 'qcmDrag'
    },
    help: 'Help text will appear here'
  }
};
