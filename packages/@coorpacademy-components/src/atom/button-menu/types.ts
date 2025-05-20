import PropTypes from 'prop-types';
import {ButtonLinkProps, IconType, iconPropTypes} from '../button-link/types';

export const buttonPropTypes = {
  'data-name': PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['default', 'defaultLeft', 'dangerous', 'dangerousLeft']),
  buttonLinkType: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'text', 'dangerous']),
  icon: PropTypes.shape({
    ...iconPropTypes,
    theme: PropTypes.oneOf(['archived', 'published', 'deleted'])
  }),
  customStyle: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
};

const propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.shape(buttonPropTypes)).isRequired,
  'data-name': PropTypes.string,
  'aria-label': PropTypes.string
};

export default propTypes;

export type Theme = 'archived' | 'published' | 'deleted';

export type ButtonProps = Omit<ButtonLinkProps, 'type' | 'icon'> & {
  type?: 'default' | 'defaultLeft' | 'dangerous' | 'dangerousLeft';
  buttonLinkType?: ButtonLinkProps['type'];
  icon?: IconType & {theme?: Theme};
};

export type ButtonMenuProps = {
  buttons: ButtonProps[];
  'data-name'?: string;
  'aria-label'?: string;
};

export type ButtonMenuPropsFixture = {props: ButtonMenuProps};
