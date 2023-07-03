// import DragAndDrop from '../../../../atom/drag-and-drop/test/fixtures/default';

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
      description: 'JPG or PNG, smaller than 5mb',
      uploadLabel: 'Browse',
      previewLabel: 'File Preview'
    },
    childType: 'drag-and-drop'
  }
};
