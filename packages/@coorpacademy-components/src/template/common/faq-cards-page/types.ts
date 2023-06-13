import PropTypes from 'prop-types';
import {
  Props as ContactProps,
  propTypes as ContactPropTypes
} from '../../../molecule/privacy-policy-contact/types';
import {Props as HeroProps, propTypes as HeroPropTypes} from '../../../molecule/hero/types';

export const propTypes = {
  header: PropTypes.shape(HeroPropTypes),
  title: PropTypes.string,
  description: PropTypes.string,
  privacyPolicyContact: PropTypes.shape(ContactPropTypes),
  quickAccessList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      href: PropTypes.string,
      openInNewTab: PropTypes.bool,
      isMoocCard: PropTypes.bool,
      feature: PropTypes.oneOf([
        'binoculaire',
        'book',
        'network',
        'chat-bubble-question',
        'mobile-phone'
      ])
    })
  )
};

export type QuickAccessItem = {
  title: string;
  description: string;
  href: string;
  openInNewTab: boolean;
  isMoocCard: boolean;
  feature: 'binoculaire' | 'book' | 'network' | 'chat-bubble-question' | 'mobile-phone';
};

export type Props = {
  header: HeroProps;
  privacyPolicyContact: ContactProps;
  title: string;
  description: string;
  quickAccessList: QuickAccessItem[];
};
