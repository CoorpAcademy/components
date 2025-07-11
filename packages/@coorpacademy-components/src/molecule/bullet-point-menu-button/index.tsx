import React, {useCallback, useState, useEffect, useRef} from 'react';
import classnames from 'classnames';
import {noop} from 'lodash/fp';
import ButtonLinkIcon from '../../atom/button-link-icon';
import ButtonMenu from '../../atom/button-menu';
import propTypes, {BulletPointMenuButtonProps} from './types';
import style from './style.css';

// Global event for menu coordination
const MENU_TOGGLE_EVENT = 'bulletPointMenuToggle';

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
  const menuIdRef = useRef<string>(`menu-${Date.now()}-${Math.random()}`);

  const handleOnClick = useCallback(
    (event: React.MouseEvent | React.TouchEvent) => {
      event.stopPropagation();
      event.preventDefault();
      onClick();
      // Emit event to close other menus
      // had to do it this way because state is handled per item.
      // meaning > item has no knowledge of other items state.
      const customEvent = new CustomEvent(MENU_TOGGLE_EVENT, {
        detail: {menuId: menuIdRef.current}
      });
      window.dispatchEvent(customEvent);

      setVisible(!visible);
    },
    [onClick, visible]
  );

  useEffect(() => {
    const handleMenuToggle = (event: Event) => {
      const customEvent = event as CustomEvent;
      if (customEvent.detail.menuId !== menuIdRef.current && visible) {
        setVisible(false);
      }
    };

    window.addEventListener(MENU_TOGGLE_EVENT, handleMenuToggle);
    return () => {
      window.removeEventListener(MENU_TOGGLE_EVENT, handleMenuToggle);
    };
  }, [visible]);

  // Handle clicks outside the menu
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

  // Conditionally show tooltip - hide it when menu is open or just closed
  const [tooltipDisabled, setTooltipDisabled] = useState(false);

  useEffect(() => {
    if (visible) {
      setTooltipDisabled(true);
    } else {
      // Delay re-enabling tooltip after menu closes
      const timer = setTimeout(() => setTooltipDisabled(false), 500);
      return () => clearTimeout(timer);
    }
  }, [visible]);

  const bulletPointButtonProps = {
    size: 'default',
    'aria-label': tooltipDisabled ? undefined : buttonAriaLabel,
    'data-name': dataName,
    icon: 'bullet-point',
    onClick: handleOnClick,
    disabled,
    className: menuButtonClassName,
    tooltipPlacement: 'top' as const
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
