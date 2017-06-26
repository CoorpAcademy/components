import Picker from '../../../../molecule/questions/picker/test/fixtures/default';

const answerProps = Picker.props;

export default {
  props: {
    question: {
      type: 'picker',
      ...answerProps
    }
  }
};
