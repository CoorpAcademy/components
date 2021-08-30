import {defaultsDeep} from 'lodash/fp';
import BrandDashboard from '../../../../../organism/brand-dashboard/test/fixtures/selected';
import Default, {items} from './default';

const {props} = Default;

export default {
  props: defaultsDeep(props, {
    items,
    content: defaultsDeep(BrandDashboard.props, {
      type: 'dashboard',
      header: {}
    })
  })
};
