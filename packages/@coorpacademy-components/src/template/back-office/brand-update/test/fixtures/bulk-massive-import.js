import bulkWizardContent from '../../../../../organism/wizard-contents/test/fixtures/bulk-massive-import';
import headerAndMenu from './default';

const {header, items} = headerAndMenu.props;

export default {
  props: {
    header,
    items,
    notifications: [],
    content: {
      ...bulkWizardContent.props,
      key: 'bulk-import',
      type: 'wizard'
    }
  }
};
