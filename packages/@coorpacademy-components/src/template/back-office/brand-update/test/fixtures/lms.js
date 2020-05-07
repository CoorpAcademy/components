import defaultsDeep from 'lodash/fp/defaultsDeep';
import noop from 'lodash/fp/noop';
import BrandTabs from '../../../../../molecule/brand-tabs/test/fixtures/lms';
import Lms from '../../../../../organism/brand-form/test/fixtures/lms';
import Default from './default';

const {props} = Default;
const {groups} = Lms.props;
const {tabs} = BrandTabs.props;

export default {
  props: defaultsDeep(props, {
    tabs,
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
