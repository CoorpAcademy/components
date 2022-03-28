import singleDragAndDrop from '../../../../molecule/drag-and-drop-wrapper/test/fixtures/default';

export default {
  props: {
    items: [{child: {...singleDragAndDrop.props, childType: 'drag-and-drop-wrapper'}}]
  }
};
