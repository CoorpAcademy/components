import WizardForm from '../../../../../organism/wizard-contents/test/fixtures/playlist-organize-courses';
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
      isLoading: false,
      key: 'add-courses',
      type: 'wizard'
    }
  }
};
