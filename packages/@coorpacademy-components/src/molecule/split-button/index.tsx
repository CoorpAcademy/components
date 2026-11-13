import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import uniqueId from 'lodash/fp/uniqueId';
import classnames from 'classnames';
import ButtonLink from '../../atom/button-link';
import Icon from '../../atom/icon';
import {SplitButtonProps, propTypes} from './types';
import style from './style.css';

const MenuOption = ({
  option,
  close
}: {
  option: SplitButtonProps['menu']['options'][number];
  close: (restoreFocus: boolean) => void;
}) => {
  const handleClick = useCallback(() => {
    close(true);
    option.onClick();
  }, [close, option]);
  return (
    <button type="button" role="menuitem" className={style.option} onClick={handleClick}>
      {option.label}
    </button>
  );
};

const SplitButton = ({
  type,
  label,
  onClick,
  disabled,
  iconName,
  iconColor,
  menu
}: SplitButtonProps) => {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuId = useMemo(() => uniqueId('split-button-menu-'), []);

  useEffect(() => {
    if (!open) return;
    const outside = (event: MouseEvent | TouchEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', outside);
    document.addEventListener('touchstart', outside);
    menuRef.current?.querySelector<HTMLButtonElement>('[role="menuitem"]:not(:disabled)')?.focus();
    return () => {
      document.removeEventListener('mousedown', outside);
      document.removeEventListener('touchstart', outside);
    };
  }, [open]);

  useEffect(() => {
    if (disabled) setOpen(false);
  }, [disabled]);

  const close = useCallback((restoreFocus: boolean) => {
    setOpen(false);
    if (restoreFocus) trigger.current?.focus();
  }, []);
  const onMenuKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        close(true);
        return;
      }
      if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const buttons = [
        ...(menuRef.current?.querySelectorAll<HTMLButtonElement>(
          '[role="menuitem"]:not(:disabled)'
        ) || [])
      ];
      if (buttons.length === 0) return;
      const active = buttons.indexOf(document.activeElement as HTMLButtonElement);
      let index = 0;
      if (event.key === 'End') index = buttons.length - 1;
      if (event.key === 'ArrowDown') index = (active + 1) % buttons.length;
      if (event.key === 'ArrowUp') index = active <= 0 ? buttons.length - 1 : active - 1;
      buttons[index].focus();
    },
    [close]
  );
  const onBlur = useCallback(
    (event: React.FocusEvent<HTMLDivElement>) => {
      if (!event.currentTarget.contains(event.relatedTarget as Node)) close(false);
    },
    [close]
  );
  const toggle = useCallback(() => setOpen(value => !value), []);
  const onTriggerKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLButtonElement>) => {
      if (event.key === 'ArrowDown' && !open) {
        event.preventDefault();
        setOpen(true);
      }
    },
    [open]
  );

  return (
    <div ref={root} className={style.root} onBlur={onBlur}>
      <ButtonLink
        {...(iconName &&
          iconColor && {
            icon: {position: 'left' as const, faIcon: {name: iconName, color: iconColor, size: 14}}
          })}
        type={type}
        label={label}
        disabled={disabled}
        onClick={onClick}
        className={style.primaryAction}
      />
      <button
        ref={trigger}
        type="button"
        className={classnames(style.trigger, type === 'secondary' && style.secondary)}
        aria-label={menu.ariaLabel}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        disabled={disabled}
        onClick={toggle}
        onKeyDown={onTriggerKeyDown}
      >
        <Icon
          iconName="chevron-down"
          iconColor="currentColor"
          size={{faSize: 14, wrapperSize: 14}}
        />
      </button>
      {open && !disabled ? (
        <div
          ref={menuRef}
          id={menuId}
          role="menu"
          aria-label={menu.ariaLabel}
          className={style.menu}
          onKeyDown={onMenuKeyDown}
        >
          {menu.options.map(option => (
            <MenuOption key={option.label} option={option} close={close} />
          ))}
        </div>
      ) : null}
    </div>
  );
};

SplitButton.propTypes = propTypes;
export default SplitButton;
