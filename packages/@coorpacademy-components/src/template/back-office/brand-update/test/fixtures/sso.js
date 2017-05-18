import defaultsDeep from 'lodash/fp/defaultsDeep';
import SSO from '../../../../../organism/brand-form/test/fixtures/sso';
import BrandTabs from '../../../../../molecule/brand-tabs/test/fixtures/sso';
import Default from './default';

const {props} = Default;
const {groups} = SSO.props;
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
