import WizardForm from '../../../../../organism/wizard-contents/test/fixtures/certification-rewards';
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
      key: 'rewards',
      type: 'wizard'
    }
  }
};
