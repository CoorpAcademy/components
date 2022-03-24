import checkedInputText from '../../../../molecule/input-text-with-titled-checkbox/test/fixtures/checked';
import doubleDragAndDrop from '../../../../molecule/drag-and-drop-wrapper/test/fixtures/two-drag-and-drops';

export default {
  props: {
    items: [
      {...checkedInputText.props, type: 'input-text'},
      {...doubleDragAndDrop.props, type: 'drag-and-drop'}
    ]
  }
};
