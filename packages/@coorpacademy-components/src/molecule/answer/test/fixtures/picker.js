import Picker from '../../../../molecule/questions/picker/test/fixtures/default';

const answerProps = Picker.props;

export default {
  props: {
    model: {
      type: 'qcmDrag',
      ...answerProps
    }
  }
};
