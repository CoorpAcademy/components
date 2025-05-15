import PropTypes from 'prop-types';
import {ButtonLinkProps, IconType, iconPropTypes} from '../button-link/types';
import Select from '../select';
import InputSwitch from '../input-switch';

export const buttonPropTypes = {
  'data-name': PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['default', 'defaultLeft', 'dangerous', 'dangerousLeft', 'select', 'switch']),
  buttonLinkType: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'text', 'dangerous']),
  icon: PropTypes.shape({
    ...iconPropTypes,
    theme: PropTypes.oneOf(['archived', 'published', 'deleted'])
  }),
  customStyle: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  selectProps: PropTypes.shape(Select.propTypes),
  switchProps: PropTypes.shape(InputSwitch.propTypes)
};

const propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.shape(buttonPropTypes)).isRequired,
  'data-name': PropTypes.string,
  'aria-label': PropTypes.string
};

export default propTypes;

export type Theme = 'archived' | 'published' | 'deleted';

export type ButtonProps = Omit<ButtonLinkProps, 'type' | 'icon'> & {
  type?: 'default' | 'defaultLeft' | 'dangerous' | 'dangerousLeft' | 'select' | 'switch';
  buttonLinkType?: ButtonLinkProps['type'];
  icon?: IconType & {theme?: Theme};
  selectProps?: {
    options: Array<{
      value: string;
      name: string;
      selected: boolean;
    }>;
    onChange: (value: string) => void;
    title?: string;
    theme?: string;
    className?: string;
  };
  switchProps?: {
    value: boolean;
    id?: string;
    onChange: (value: boolean) => void;
  };
};

export type ButtonMenuProps = {
  buttons: ButtonProps[];
  'data-name'?: string;
  'aria-label'?: string;
};

export type ButtonMenuPropsFixture = {props: ButtonMenuProps};
