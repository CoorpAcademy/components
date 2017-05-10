import Desktop from '../../../../atom/image-upload/test/fixtures/desktop';
import Mobile from '../../../../atom/image-upload/test/fixtures/mobile';
import Email from '../../../../atom/image-upload/test/fixtures/email';

export default {
  props: {
    title: 'Platform logos',
    subtitle: '(SVG files are recommanded for retina display. For any other file types, max height recommanded is xxx px)', // eslint-disable-line max-len
    fieldsLayout: 'grid',
    fields: [
      {
        type: 'image',
        ...Desktop.props
      },
      {
        type: 'image',
        ...Mobile.props
      },
      {
        type: 'image',
        ...Email.props
      }
    ]
  }
};
