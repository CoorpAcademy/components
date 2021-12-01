import warningNotifiation from '../../../../../molecule/banner/test/fixtures/default';
import WizardForm from '../../../../../organism/wizard-contents/test/fixtures/playlist-general-settings-edit';
import headerAndMenu from './default';

const {header, items} = headerAndMenu.props;
const form = WizardForm.props;

export default {
  props: {
    header,
    items,
    notifications: [warningNotifiation.props],
    content: {
      ...form,
      key: 'general-settings',
      type: 'wizard'
    }
  }
};
