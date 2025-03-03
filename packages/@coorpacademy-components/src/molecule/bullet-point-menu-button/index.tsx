import React, {useCallback, useMemo, useState, useEffect} from 'react';
import classnames from 'classnames';
import {noop, some} from 'lodash/fp';
import ButtonLinkIcon from '../../atom/button-link-icon';
import ButtonMenu from '../../atom/button-menu';
import {ButtonProps} from '../../atom/button-menu/types';
import propTypes, {BulletPointMenuButtonProps} from './types';
import style from './style.css';

const BulletPointMenuButton = (props: BulletPointMenuButtonProps) => {
  const {
    disabled = false,
    buttonAriaLabel,
    menuAriaLabel,
    onClick = noop,
    buttons,
    menuButtonClassName,
    isBulkMenu
  } = props;
  const [visible, setVisible] = useState(false);

  const handleOnClick = useCallback(() => {
    onClick();
    setVisible(true);
  }, [onClick]);

  useEffect(() => {
    const handleMouseDown = () => setVisible(false);
    document.addEventListener('mousedown', handleMouseDown);
    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  const hasIcon = useMemo(() => some((button: ButtonProps) => !!button.icon, buttons), [buttons]);

  const menuProps = {
    'data-name': 'button-menu',
    buttons,
    hasIcon
  };

  const menu = (
    <div
      className={classnames(
        style.bulletPointMenu,
        isBulkMenu && style.bulkBulletPointMenu,
        visible && style.visible,
        hasIcon && style.bulletPointMenuWithIcon
      )}
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
      <ButtonLinkIcon {...bulletPointButtonProps} />
      {menu}
    </div>
  );
};

BulletPointMenuButton.propTypes = propTypes;

export default BulletPointMenuButton;
