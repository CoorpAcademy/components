// import DragDrop from '../../../drag-and-drop-wrapper/test/fixtures/default';
export default {
  props: {
    title: 'Massive Import',
    subtitle:
      'Both files (csv & zip) are required for bulk upload and must match each other (the csv contains the metadata of the content in the zip)',
    fields: [
      {
        uploadLabel: 'Browse',
        description: 'ZIP',
        onChange: () => true,
        title: 'Upload ZIP',
        // childType: 'drag-and-drop-wrapper',
        type: 'image'
      },
      {
        uploadLabel: 'Browse',
        description: 'CSV',
        onChange: () => true,
        title: 'Upload CSV',
        // childType: 'drag-and-drop-wrapper',
        type: 'image'
      }
    ],
    fieldsLayout: 'grid'
  }
};
