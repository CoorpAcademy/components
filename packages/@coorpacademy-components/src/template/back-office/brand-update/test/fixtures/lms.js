import defaultsDeep from 'lodash/fp/defaultsDeep';
import noop from 'lodash/fp/noop';
import Lms from '../../../../../organism/brand-form/test/fixtures/lms';
import Default, {items} from './default';

const {props} = Default;
const {groups} = Lms.props;

export default {
  props: defaultsDeep(props, {
    items,
    content: {
      type: 'form',
      groups,
      onReset: noop,
      onSubmit: noop,
      resetValue: 'Reset changes',
      submitValue: 'Save changes'
    }
  })
};
