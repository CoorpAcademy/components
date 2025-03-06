import PropTypes from 'prop-types';
import {ButtonLinkProps, IconType, iconPropTypes} from '../button-link/types';

export const buttonPropTypes = {
  'data-name': PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['default', 'defaultLeft', 'dangerous', 'dangerousLeft']),
  buttonLinkType: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'text', 'dangerous']),
  icon: PropTypes.shape(iconPropTypes),
  customStyle: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
};

const propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.shape(buttonPropTypes)).isRequired,
  'data-name': PropTypes.string,
  'aria-label': PropTypes.string
};

export default propTypes;

export type ButtonProps = {
  'data-name'?: string;
  disabled?: boolean;
  label: string;
  onClick: () => void;
  type?: 'default' | 'defaultLeft' | 'dangerous' | 'dangerousLeft';
  buttonLinkType?: ButtonLinkProps['type'];
  icon?: IconType;
  customStyle?: Record<string, string | number>;
};

export type ButtonMenuProps = {
  buttons: ButtonProps[];
  'data-name'?: string;
  'aria-label'?: string;
};

export type ButtonMenuPropsFixture = {props: ButtonMenuProps};
