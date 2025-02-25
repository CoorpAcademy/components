import PropTypes from 'prop-types';
import {keys} from 'lodash/fp';
import {ICONS} from '../../util/button-icons';

const propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'text', 'dangerous']),
  usage: PropTypes.oneOf(['button', 'submit', 'reset']),
  label: PropTypes.string,
  content: PropTypes.node,
  'aria-label': PropTypes.string,
  tooltipText: PropTypes.string,
  tooltipPlacement: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
  'data-name': PropTypes.string,
  'data-testid': PropTypes.string,
  icon: PropTypes.shape({
    position: PropTypes.oneOf(['right', 'left']),
    type: PropTypes.oneOf(keys(ICONS))
  }),
  onClick: PropTypes.func,
  link: PropTypes.shape({
    href: PropTypes.string,
    download: PropTypes.bool,
    target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top'])
  }),
  hoverBackgroundColor: PropTypes.string,
  hoverColor: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  customStyle: PropTypes.shape({}),
  isCustomSkillMenu: PropTypes.bool
};

export type FaIcontype = {
  name: string;
  color?: string;
  backgroundColor?: string;
  size?: number;
  customStyle?: Record<string, unknown>;
};

export type IconType = {
  position: 'right' | 'left';
  type?: keyof typeof ICONS;
  faIcon?: FaIcontype;
};
export type ButtonLinkProps = {
  type?: 'primary' | 'secondary' | 'tertiary' | 'text' | 'dangerous';
  usage?: 'button' | 'submit' | 'reset';
  label?: string;
  content?: React.ReactNode;
  'aria-label'?: string;
  tooltipText?: string;
  tooltipPlacement?: 'left' | 'right' | 'top' | 'bottom';
  'data-name'?: string;
  'data-testid'?: string;
  icon?: IconType;
  onClick?: () => void;
  onKeyDown?: () => void;
  link?: {
    href?: string;
    download?: boolean;
    target?: '_self' | '_blank' | '_parent' | '_top';
  };
  hoverBackgroundColor?: string;
  hoverColor?: string;
  disabled?: boolean;
  className?: string;
  customStyle?: Record<string, unknown>;
  useTitle?: boolean;
  isCustomSkillMenu?: boolean;
};

export type Fixture = {props: ButtonLinkProps};

export default propTypes;
