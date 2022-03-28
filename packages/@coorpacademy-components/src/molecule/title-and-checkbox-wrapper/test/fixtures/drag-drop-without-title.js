import DragDrop from '../../../drag-and-drop-wrapper/test/fixtures/default';

export default {
  props: {
    child: {
      ...DragDrop.props,
      childType: 'drag-and-drop-wrapper'
    }
  }
};
