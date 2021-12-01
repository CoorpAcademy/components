import WizardForm from '../../../../../organism/wizard-contents/test/fixtures/playlist-add-courses-create';
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
      key: 'add-courses',
      type: 'wizard'
    }
  }
};
