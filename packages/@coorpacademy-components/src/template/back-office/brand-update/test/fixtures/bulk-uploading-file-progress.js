import UploadingFileProgress from '../../../../../organism/wizard-contents/test/fixtures/bulk-upload-progression';
import headerAndMenu from './default';

const {header, items} = headerAndMenu.props;

export default {
  props: {
    header,
    items,
    content: {
      ...UploadingFileProgress.props,
      key: 'bulk-infos',
      type: 'wizard'
    },
    contentFixHeight: true
  }
};
