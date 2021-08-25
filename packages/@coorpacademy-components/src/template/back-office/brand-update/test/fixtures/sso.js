import {defaultsDeep} from 'lodash/fp';
import SSO from '../../../../../organism/brand-form/test/fixtures/sso';
import BrandTabs from '../../../../../molecule/brand-tabs/test/fixtures/sso';
import Default from './default';

const {props} = Default;
const {groups} = SSO.props;
const {items} = BrandTabs.props;

export default {
  props: defaultsDeep(props, {
    items,
    content: {
      type: 'form',
      groups,
      onSubmit: () => {},
      submitValue: 'Save changes'
    }
  })
};
