import cloneDeep from 'lodash/fp/cloneDeep';
import defaultsDeep from 'lodash/fp/defaultsDeep';
import BrandTabs from '../../../../../molecule/brand-tabs/test/fixtures/lms';
import Lms from '../../../../../organism/brand-form/test/fixtures/lms';
import Default from './default';

const {props} = Default;
const {groups} = Lms.props;
const {tabs} = BrandTabs.props;

const modifiedGroups = cloneDeep(groups);
modifiedGroups[1].fields[0].slides[0].fields[0].modified = true;
modifiedGroups[1].fields[0].tabProps[0].isOpen = true;

export default {
  props: defaultsDeep(props, {
    tabs,
    content: {
      type: 'form',
      groups: modifiedGroups,
      isModified: true,
      onReset: () => {
        console.log('Reset modified values');
      },
      onSubmit: () => {
        console.log('Submit form');
      },
      resetValue: 'Reset changes',
      submitValue: 'Save changes'
    }
  })
};
