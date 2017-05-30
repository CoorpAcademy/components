import DropDown from '../../../../questions/drop-down/test/fixtures/default';
import Default from './default';

const answerProps = DropDown.props;

export default {
  props: {
    ...Default.props,
    answer: {
      type: 'dropDown',
      ...answerProps
    }
  }
};
