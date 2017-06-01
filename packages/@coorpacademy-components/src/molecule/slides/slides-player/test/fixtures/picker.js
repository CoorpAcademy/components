import Picker from '../../../../questions/picker/test/fixtures/default';
import Default from './default';

const answerProps = Picker.props;

export default {
  props: {
    ...Default.props,
    answer: {
      type: 'picker',
      ...answerProps
    }
  }
};
