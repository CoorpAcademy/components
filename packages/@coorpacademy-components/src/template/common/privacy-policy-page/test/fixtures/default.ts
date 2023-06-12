import Header from '../../../../../molecule/hero/test/fixtures/mode-header';
import PrivacyPolicyContact from '../../../../../molecule/privacy-policy-contact/test/fixtures/default';
import ExpandableList from '../../../../../molecule/expandable-list/test/fixtures/default';
import MenuLinks from '../../../../../molecule/menu-links/test/fixtures/default';
import {Props} from '../../types';

type Fixture = {props: Props};
const fixture: Fixture = {
  props: {
    header: Header.props,
    privacyPolicyContact: PrivacyPolicyContact.props,
    expandableList: ExpandableList.props,
    menuLinks: MenuLinks.props
  }
};
export default fixture;
