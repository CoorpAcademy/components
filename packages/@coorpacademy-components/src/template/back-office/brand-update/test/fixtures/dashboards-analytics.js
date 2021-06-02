import {defaultsDeep} from 'lodash/fp';
import BrandTabs from '../../../../../molecule/brand-tabs/test/fixtures/analytics';
import BrandDashboard from '../../../../../organism/brand-dashboard/test/fixtures/selected';
import Default from './default';

const {props} = Default;
const {tabs} = BrandTabs.props;

export default {
  props: defaultsDeep(props, {
    tabs,
    content: defaultsDeep(BrandDashboard.props, {
      type: 'dashboard',
      header: {}
    })
  })
};
