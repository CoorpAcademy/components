import checkedInputText from '../../../../molecule/input-text-with-titeled-checkbox/test/fixtures/checked';
import singleDragAndDrop from '../../../../molecule/drag-and-drop-wrapper/test/fixtures/default';
import doubleDragAndDrop from '../../../../molecule/drag-and-drop-wrapper/test/fixtures/two-drag-and-drops';

export default {
  props: {
    items: [
      {...checkedInputText.props, type: 'input-text'},
      {...singleDragAndDrop.props, type: 'drag-and-drop'},
      {...doubleDragAndDrop.props, type: 'drag-and-drop'}
    ]
  }
};
