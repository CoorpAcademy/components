import inputText from '../../../../atom/input-text-with-title/test/fixtures/error';
import doubleDragAndDrop from '../../../../molecule/drag-and-drop-wrapper/test/fixtures/two-drag-and-drops';

export default {
  props: {
    items: [
      {child: {...inputText.props, childType: 'input-text'}},
      {child: {...doubleDragAndDrop.props, childType: 'drag-and-drop-wrapper'}}
    ]
  }
};
