import WizardForm from '../../../../../organism/wizard-contents/test/fixtures/playlist-general-settings-create';
import headerAndMenu from './default';

const {header, items} = headerAndMenu.props;
const form = WizardForm.props;

export default {
  props: {
    notifications: {},
    header,
    items,
    content: {
      ...form,
      key: 'general-settings',
      type: 'wizard'
    }
  }
};
