import defaultsDeep from 'lodash/fp/defaultsDeep';
import BrandTabs from '../../../../../molecule/brand-tabs/test/fixtures/manageusers';
import Default from './default';

const {props} = Default;
const {tabs} = BrandTabs.props;

export default {
  props: defaultsDeep(props, {
    tabs
  })
};
