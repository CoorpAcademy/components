import PropTypes from 'prop-types';
import {
  Props as ContactProps,
  propTypes as ContactPropTypes
} from '../../../molecule/privacy-policy-contact/types';

export const propTypes = {
  subArticles: PropTypes.arrayOf(
    PropTypes.shape({
      subTitle: PropTypes.string,
      text: PropTypes.string,
      image: PropTypes.string,
      backButtonText: PropTypes.string
    })
  ),
  title: PropTypes.string,
  backButton: PropTypes.shape({
    size: PropTypes.string,
    'data-name': PropTypes.string,
    'aria-label': PropTypes.string,
    icon: PropTypes.string,
    onClick: PropTypes.func
  }),
  privacyPolicyContact: PropTypes.shape(ContactPropTypes)
};

export type SubArticle = {subTitle: string; text: string; image: string};

export type Props = {
  subArticles: SubArticle[];
  backButtonText: string;
  title: string;
  privacyPolicyContact: ContactProps;
  backButton: {
    size: string;
    'data-name': string;
    'aria-label': string;
    icon: string;
    onClick: () => void;
  };
};
