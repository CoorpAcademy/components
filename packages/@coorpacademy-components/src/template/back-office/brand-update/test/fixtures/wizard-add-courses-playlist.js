import WizardForm from '../../../../../organism/wizard-contents/test/fixtures/playlist-add-courses-create';
import hiddenNotifiation from '../../../../../molecule/banner/test/fixtures/hidden-error-banner';
import headerAndMenu from './default';

const {header, items} = headerAndMenu.props;
const form = WizardForm.props;

export default {
  props: {
    header,
    items,
    notifications: [hiddenNotifiation.props],
    content: {
      ...form,
      isLoading: false,
      key: 'add-courses',
      type: 'wizard'
    }
  }
};
