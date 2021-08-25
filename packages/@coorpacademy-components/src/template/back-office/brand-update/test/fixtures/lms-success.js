import cloneDeep from 'lodash/fp/cloneDeep';
import defaultsDeep from 'lodash/fp/defaultsDeep';
import noop from 'lodash/fp/noop';
import BrandTabs from '../../../../../molecule/brand-tabs/test/fixtures/lms';
import Lms from '../../../../../organism/brand-form/test/fixtures/lms';
import Default from './default';

const {props} = Default;
const {groups} = Lms.props;
const {items} = BrandTabs.props;

const successGroups = cloneDeep(groups);
successGroups[1].fields[0].slides[0].fields[3].value = 'jlJkklJbhgTYvghytfgvf(7H77ggbV4T';
successGroups[1].fields[0].tabProps[0].isOpen = true;

export default {
  props: defaultsDeep(props, {
    notifications: [
      {
        type: 'success',
        message: 'Your changes have been saved.',
        onClose: noop
      }
    ],
    items,
    content: {
      type: 'form',
      groups: successGroups,
      onReset: noop,
      onSubmit: noop,
      resetValue: 'Reset changes',
      submitValue: 'Save changes'
    }
  })
};
