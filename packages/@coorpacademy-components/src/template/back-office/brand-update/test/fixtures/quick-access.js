import {defaultsDeep} from 'lodash/fp';
import BrandDashboard from '../../../../../organism/brand-dashboard/test/fixtures/default';
import go1Popin from '../../../../../molecule/cm-popin/test/fixtures/go1-popin';
import Default from './default';

const {props} = Default;

export default {
  props: defaultsDeep(props, {
    content: {
      ...BrandDashboard.props,
      type: 'home'
    },
    popin: go1Popin.props
  })
};
