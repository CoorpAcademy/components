import PropTypes from 'prop-types';
import {ButtonLinkProps, IconType} from '../button-link/types';

export const buttonPropTypes = {
  'data-name': PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['default', 'defaultLeft', 'dangerous', 'dangerousLeft']),
  linkType: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'text', 'dangerous']),
  icon: PropTypes.shape({
    position: PropTypes.oneOf(['right', 'left']).isRequired,
    type: PropTypes.string,
    faIcon: PropTypes.shape({
      name: PropTypes.string.isRequired,
      size: PropTypes.number,
      color: PropTypes.string
    })
  }),
  customStyle: PropTypes.shape({
    color: PropTypes.string,
    hoverBackgroundColor: PropTypes.string
  }),
  isCustomSkillMenu: PropTypes.bool
};

const propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.shape(buttonPropTypes)).isRequired,
  'data-name': PropTypes.string
};

export default propTypes;

type CustomStyleProps = {
  color?: string;
  hoverBackgroundColor?: string;
};

export type ButtonProps = {
  'data-name'?: string;
  disabled?: boolean;
  label: string;
  onClick: () => void;
  type?: 'default' | 'defaultLeft' | 'dangerous' | 'dangerousLeft';
  linkType?: ButtonLinkProps['type'];
  icon?: IconType;
  customStyle?: CustomStyleProps;
  isCustomSkillMenu?: boolean;
};

export type ButtonMenuProps = {
  buttons: ButtonProps[];
  'data-name'?: string;
  'aria-label'?: string;
  isCustomSkillMenu?: boolean;
};

export type ButtonMenuPropsFixture = {props: ButtonMenuProps};
