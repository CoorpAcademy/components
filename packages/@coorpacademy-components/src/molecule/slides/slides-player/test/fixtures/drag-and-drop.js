import DragAndDrop from '../../../../questions/drag-and-drop/test/fixtures/default';
import Default from './default';

const answerProps = DragAndDrop.props;

export default {
  props: {
    ...Default.props,
    answer: {
      type: 'dragAndDrop',
      ...answerProps
    }
  }
};
