import WizardForm from '../../../../../organism/wizard-contents/test/fixtures/playlist-populations-create';
import cmPopin from '../../../../../molecule/cm-popin/test/fixtures/default';
import headerAndMenu from './default';

const {header, items} = headerAndMenu.props;
const form = WizardForm.props;
const popinProps = cmPopin.props;

export default {
  props: {
    header,
    items,
    notifications: [],
    popin: popinProps,
    content: {
      ...form,
      isLoading: false,
      key: 'populations',
      type: 'wizard'
    }
  }
};
