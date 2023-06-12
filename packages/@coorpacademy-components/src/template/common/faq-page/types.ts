import PropTypes from 'prop-types';
import {
  Props as ContactProps,
  propTypes as ContactPropTypes
} from '../../../molecule/privacy-policy-contact/types';
import {Props as HeroProps, propTypes as HeroPropTypes} from '../../../molecule/hero/types';
import {
  Props as MenuLinksProps,
  propTypes as MenuLinksPropTypes
} from '../../../molecule/menu-links/types';
import {
  Props as ListProps,
  propTypes as ListPropTypes
} from '../../../molecule/expandable-list/types';

export const propTypes = {
  header: PropTypes.shape(HeroPropTypes),
  privacyPolicyContact: PropTypes.shape(ContactPropTypes),
  menuLinks: PropTypes.shape(MenuLinksPropTypes),
  expandableList: PropTypes.shape(ListPropTypes)
};

export type Props = {
  header: HeroProps;
  privacyPolicyContact: ContactProps;
  menuLinks: MenuLinksProps;
  expandableList: ListProps;
};
