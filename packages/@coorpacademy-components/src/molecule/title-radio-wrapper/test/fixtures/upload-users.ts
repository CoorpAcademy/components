import DragAndDrop from '../../../../atom/drag-and-drop/test/fixtures/default';

export default {
  props: {
    radioWithTitle: {
      title: {
        type: 'form-group',
        title: 'Upload a list of specific users',
        subtitle: 'Using an Excel file (mandatory column: email address'
      }
    },
    field: {
      item: {...DragAndDrop.props},
      childType: 'drag-and-drop'
    }
  }
};
