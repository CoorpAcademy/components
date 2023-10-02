import Desktop from '../../../../atom/input-file-draggable/test/fixtures/desktop';
import Mobile from '../../../../atom/input-file-draggable/test/fixtures/mobile';
import Email from '../../../../atom/input-file-draggable/test/fixtures/email';

export default {
  props: {
    title: 'Platform logos',
    subtitle:
      '(SVG files are recommanded for retina display. For any other file types, max height recommanded is xxx px)',
    fieldsLayout: 'grid',
    fields: [
      {
        ...Desktop.props,
        type: 'image'
      },
      {
        ...Mobile.props,
        type: 'image',
        previewContent: {}
      },
      {
        ...Email.props,
        type: 'image',
        modified: false,
        loading: true,
        previewContent: {}
      }
    ]
  }
};
