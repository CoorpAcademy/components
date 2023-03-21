import React, {useCallback} from 'react';
import classnames from 'classnames';
import ButtonLinkIconOnly from '../../atom/button-link-icon-only';
import ButtonMenu from '../../atom/button-menu';
import propTypes, {BulletPointMenuButtonProps} from './types';
import style from './style.css';

const BulletPointMenuButton = (props: BulletPointMenuButtonProps) => {
  const {
    disabled = false,
    buttonAriaLabel,
    menuAriaLabel,
    onClick,
    buttons,
    menuButtonClassName,
    isBulkMenu
  } = props;
  const handleOnClick = useCallback(() => onClick(), [onClick]);

  const menuProps = {
    'data-name': 'button-menu',
    buttons
  };

  const menu = (
    <div
      className={classnames(style.bulletPointMenu, isBulkMenu && style.bulkBulletPointMenu)}
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

BulletPointMenuButton.propTypes = propTypes;

export default BulletPointMenuButton;
