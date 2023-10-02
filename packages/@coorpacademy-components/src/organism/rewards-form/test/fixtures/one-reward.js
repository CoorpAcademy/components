import PDFDragAndDrop from '../../../../atom/input-file-draggable/test/fixtures/pdf';

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
