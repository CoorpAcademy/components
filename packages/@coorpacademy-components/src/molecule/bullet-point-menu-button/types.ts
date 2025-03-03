import PropTypes from 'prop-types';
import ButtonMenu from '../../atom/button-menu';
import {ButtonProps} from '../../atom/button-menu/types';

const propTypes = {
  disabled: PropTypes.bool,
  buttonAriaLabel: PropTypes.string,
  menuAriaLabel: PropTypes.string,
  buttons: ButtonMenu.propTypes.buttons,
  onClick: PropTypes.func,
  menuButtonClassName: PropTypes.string,
  isBulkMenu: PropTypes.bool
};

export default propTypes;

export type BulletPointMenuButtonProps = {
  disabled?: boolean;
  buttonAriaLabel?: string;
  menuAriaLabel?: string;
  buttons: ButtonProps[];
  onClick: () => void;
  menuButtonClassName?: string;
  isBulkMenu?: boolean;
};

export type BulletPointMenuButtonPropsFixture = {props: BulletPointMenuButtonProps};
