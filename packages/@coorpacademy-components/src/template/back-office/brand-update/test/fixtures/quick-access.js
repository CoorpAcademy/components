import {defaultsDeep} from 'lodash/fp';
import BrandDashboard from '../../../../../organism/brand-dashboard/test/fixtures/default';
import Default from './default';

const {props} = Default;

export default {
  props: defaultsDeep(props, {
    content: {
      ...BrandDashboard.props,
      type: 'home'
    }
  })
};
