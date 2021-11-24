import wizardForm from '../../../../../organism/wizard-contents/test/fixtures/playlist-general-settings-create';
import headerAndMenu from './default';

const {header, items} = headerAndMenu.props;

export default {
  props: {
    ...wizardForm,
    notifications: {},
    header,
    items
  }
};
