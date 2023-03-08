import PDFDragAndDrop from '../../../../atom/image-upload/test/fixtures/pdf';

export default {
  props: {
    items: [
      {
        child: {
          list: [{...PDFDragAndDrop.props}],
          childType: 'drag-and-drop-wrapper'
        }
      }
    ]
  }
};
