import cloneDeep from 'lodash/fp/cloneDeep';
import defaultsDeep from 'lodash/fp/defaultsDeep';
import noop from 'lodash/fp/noop';
import Lms from '../../../../../organism/brand-form/test/fixtures/lms';
import Default, {items} from './default';

const {props} = Default;
const {groups} = Lms.props;

const errorGroups = cloneDeep(groups);
errorGroups[1].fields[0].slides[0].fields[3].error = 'Client Secret is required';
errorGroups[1].fields[0].tabProps[0].isOpen = true;

export default {
  props: defaultsDeep(props, {
    notifications: [
      {
        type: 'error',
        message: errorGroups[1].fields[0].slides[0].fields[3].error,
        onClose: noop
      }
    ],

    items,
    content: {
      type: 'form',
      groups: errorGroups,
      isModified: true,
      onReset: () => {
        console.log('Reset modified values');
      },
      onSubmit: noop,
      resetValue: 'Reset changes',
      submitValue: 'Save changes'
    }
  })
};
