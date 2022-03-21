import singleDragAndDrop from '../../../../molecule/drag-and-drop-wrapper/test/fixtures/default';

export default {
  props: {
    items: [{...singleDragAndDrop.props, type: 'drag-and-drop'}]
  }
};
