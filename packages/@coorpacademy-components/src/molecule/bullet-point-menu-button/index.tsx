import React, {useCallback, useState, useEffect, useRef} from 'react';
import classnames from 'classnames';
import {noop} from 'lodash/fp';
import ButtonLinkIcon from '../../atom/button-link-icon';
import ButtonMenu from '../../atom/button-menu';
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
    isBulkMenu,
    'data-name': dataName = 'bullet-point-button'
  } = props;
  const [visible, setVisible] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleOnClick = useCallback(
    (event: React.MouseEvent | React.TouchEvent) => {
      event.stopPropagation();
      event.preventDefault();
      onClick();
      setVisible(!visible);
    },
    [onClick, visible]
  );

  useEffect(() => {
    const handleClick = (clickEvent: MouseEvent | TouchEvent) => {
      if (
        wrapperRef &&
        wrapperRef.current &&
        !wrapperRef.current.contains(clickEvent.target as Node)
      ) {
        setVisible(false);
      }
    };
    if (visible) {
      document.addEventListener('click', handleClick);
      document.addEventListener('touchstart', handleClick);
    } else {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('touchstart', handleClick);
    }
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('touchstart', handleClick);
    };
  }, [visible]);

  const menuProps = {
    'data-name': 'button-menu',
    buttons
  };

  const menuStyle = classnames(
    style.bulletPointMenu,
    isBulkMenu && style.bulkBulletPointMenu,
    style.visible
  );

  const menu = visible ? (
    <div className={menuStyle} data-name="menu-wrapper" aria-label={menuAriaLabel} ref={wrapperRef}>
      <ButtonMenu {...menuProps} />
    </div>
  ) : null;

  const bulletPointButtonProps = {
    size: 'default',
    'aria-label': buttonAriaLabel,
    'data-name': dataName,
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
