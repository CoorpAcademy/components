import WizardForm from '../../../../../organism/wizard-contents/test/fixtures/playlist-translate-edit';
import headerAndMenu from './default';

const {header, items} = headerAndMenu.props;
const form = WizardForm.props;

export default {
  props: {
    header,
    items,
    notifications: [],
    content: {
      ...form,
      key: 'translate',
      type: 'wizard'
    }
  }
};
