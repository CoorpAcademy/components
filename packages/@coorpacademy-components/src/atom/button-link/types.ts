import PropTypes from 'prop-types';
import {keys} from 'lodash/fp';
import {ICONS} from '../../util/button-icons';
import Tag from '../tag';

const faIconPropTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  size: PropTypes.number,
  customStyle: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
};

export const iconPropTypes = {
  position: PropTypes.oneOf(['right', 'left']),
  type: PropTypes.oneOf(keys(ICONS)),
  faIcon: PropTypes.shape(faIconPropTypes)
};

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
  icon: PropTypes.shape(iconPropTypes),
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
  customStyle: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  contentCustomStyle: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  useTitle: PropTypes.bool,
  customLabelClassName: PropTypes.string
};

export type FaIconType = {
  name: string;
  color?: string;
  backgroundColor?: string;
  size?: number;
  customStyle?: React.CSSProperties;
};

export type IconType = {
  position: 'right' | 'left';
  type?: keyof typeof ICONS;
  faIcon?: FaIconType;
};

export type ButtonLinkProps = {
  type?: 'primary' | 'secondary' | 'tertiary' | 'text' | 'dangerous';
  usage?: 'button' | 'submit' | 'reset';
  label?: string;
  content?: PropTypes.ReactNodeLike;
  'aria-label'?: string;
  tooltipText?: string;
  tooltipPlacement?: 'left' | 'right' | 'top' | 'bottom';
  'data-name'?: string;
  'data-testid'?: string;
  icon?: IconType | IconType[];
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
  customStyle?: React.CSSProperties;
  contentCustomStyle?: React.CSSProperties;
  useTitle?: boolean;
  customLabelClassName?: string;
  tag?: React.ComponentProps<typeof Tag>;
};

export type Fixture = {props: ButtonLinkProps};

export default propTypes;
