import defaultsDeep from 'lodash/fp/defaultsDeep';
import Analytics from '../../../../../organism/brand-form/test/fixtures/analytics';
import BrandTabs from '../../../../../molecule/brand-tabs/test/fixtures/analytics';
import Default from './default';

const {props} = Default;
const {groups} = Analytics.props;
const {tabs} = BrandTabs.props;

export default {
  props: defaultsDeep(props, {
    tabs,
    content: {
      type: 'form',
      groups,
      onSubmit: () => {}, 
      submitValue: 'Save changes'
    }
  })
};
