import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ButtonLinkIconOnly from '../../atom/button-link-icon-only';
import ButtonMenu from '../../atom/button-menu';
// eslint-disable-next-line css-modules/no-unused-class
import style from './style.css';

const BulletPointMenuButton = props => {
  const {
    disabled = false,
    buttonAriaLabel,
    menuAriaLabel,
    onClick,
    buttons,
    menuButtonClassName,
    menuClassName
  } = props;
  const handleOnClick = useCallback(() => onClick(), [onClick]);

  const menuProps = {
    'data-name': 'button-menu',
    buttons
  };

  const menu = (
    <div
      // className={menuClassName ? style[menuClassName] : style.bulletPointMenu}
      className={classnames(style.bulletPointMenu, menuClassName && style[menuClassName])}
      data-name="menu-wrapper"
      aria-label={menuAriaLabel}
    >
      <ButtonMenu {...menuProps} />
    </div>
  );
  const bulletPointButtonProps = {
    size: 'default',
    'aria-label': buttonAriaLabel,
    'data-name': 'bullet-point-button',
    icon: 'bullet-point',
    onClick: handleOnClick,
    disabled,
    className: menuButtonClassName
  };

  return (
    <div className={style.bulletPointWrapper} data-name="bullet-point-wrapper">
      <ButtonLinkIconOnly {...bulletPointButtonProps} />
      {menu}
    </div>
  );
};

BulletPointMenuButton.propTypes = {
  disabled: PropTypes.bool,
  buttonAriaLabel: PropTypes.string,
  menuAriaLabel: PropTypes.string,
  buttons: ButtonMenu.propTypes.buttons,
  onClick: PropTypes.func,
  menuButtonClassName: PropTypes.string,
  menuClassName: PropTypes.string
};

export default BulletPointMenuButton;
