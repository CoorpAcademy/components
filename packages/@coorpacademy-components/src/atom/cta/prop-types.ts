import PropTypes from 'prop-types';
import Link from '../link';

const propTypes = {
  'aria-label': Link.propTypes['aria-label'],
  submitValue: Link.propTypes.children,
  href: Link.propTypes.href,
  onClick: Link.propTypes.onClick,
  target: Link.propTypes.target,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  light: PropTypes.bool,
  secondary: PropTypes.bool,
  small: PropTypes.bool,
  className: PropTypes.string,
  logout: PropTypes.bool,
  rectangular: PropTypes.bool,
  fullWidth: PropTypes.bool,
  certificationButton: PropTypes.bool,
  useButtonTag: Link.propTypes.useButtonTag
};

export type CTAProps = {
  'aria-label'?: string;
  submitValue: React.ReactElement;
  href: string;
  onClick?: () => void;
  target: '_self' | '_blank' | '_parent' | '_top';
  name: string;
  disabled: boolean;
  light: boolean;
  secondary: boolean;
  small: boolean;
  className: string;
  logout: boolean;
  rectangular: boolean;
  fullWidth: boolean;
  certificationButton: boolean;
  useButtonTag: boolean;
};

export default propTypes;
