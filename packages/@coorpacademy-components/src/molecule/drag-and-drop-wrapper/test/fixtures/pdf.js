import Pdf from '../../../../atom/input-file-draggable/test/fixtures/pdf';

export default {
  props: {
    list: [{...Pdf.props, title: 'Add a badge'}]
  }
};
