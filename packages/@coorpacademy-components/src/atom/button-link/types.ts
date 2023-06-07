import PropTypes from 'prop-types';
import {keys} from 'lodash/fp';
import {ICONS} from '../../util/button-icons';

const propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'text', 'dangerous']),
  label: PropTypes.string,
  'aria-label': PropTypes.string,
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
  disabled: PropTypes.bool,
  className: PropTypes.string,
  customStyle: PropTypes.shape({})
};

export type IconType = {
  position: 'right' | 'left';
  type: keyof typeof ICONS;
};
export type ButtonLinkProps = {
  type?: 'primary' | 'secondary' | 'tertiary' | 'text' | 'dangerous';
  label?: string;
  'aria-label'?: string;
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
  disabled?: boolean;
  className?: string;
  customStyle?: Record<string, unknown>;
  useTitle?: boolean;
};

export type Fixture = {props: ButtonLinkProps};

export default propTypes;
