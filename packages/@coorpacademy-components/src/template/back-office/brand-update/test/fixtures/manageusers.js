import {defaultsDeep} from 'lodash/fp';
import BrandTabs from '../../../../../molecule/brand-tabs/test/fixtures/manageusers';
import Default from './default';

const {props} = Default;
const {items} = BrandTabs.props;

export default {
  props: defaultsDeep(props, {
    items
  })
};
