import React, {useState, useRef, useCallback} from 'react';
import classnames from 'classnames';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {IconName} from '@fortawesome/fontawesome-svg-core';
import style from './style.css';
import {InputSelectProps, Option, propTypes} from './types';

const COMPONENT_ID = 'input-select';

const InputSelect: React.FC<InputSelectProps> = ({
  options = [],
  value,
  onChange,
  placeholder,
  className,
  'aria-label': ariaLabel,
  iconClosed = 'chevron-down',
  selectedIcon = 'circle-check'
}) => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const componentId = `${COMPONENT_ID}-${
    placeholder?.toLowerCase().replace(/\s+/g, '-') || 'default'
  }`;

  const handleToggle = useCallback(() => {
    setOpen(o => !o);
  }, []);

  const handleOnOptionClick = useCallback(
    (optionValue: string) => {
      onChange(optionValue);
      setOpen(false);
    },
    [onChange]
  );

  React.useEffect(() => {
    if (!open) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  const selectedOption = options.find(opt => opt.value === value);

  const renderOption = (option: Option) => {
    function handleClick() {
      handleOnOptionClick(option.value);
    }

    const isSelected = option.value === value;

    return (
      <li
        key={option.value}
        className={classnames(style.option, isSelected && style.selected)}
        role="option"
        aria-selected={isSelected}
        onClick={handleClick}
      >
        <span className={style.optionIcon}>{option.icon}</span>
        <span className={style.optionLabel}>{option.label}</span>
        {isSelected ? (
          <span className={style.checkIcon}>
            <FontAwesomeIcon icon={selectedIcon as IconName} />
          </span>
        ) : null}
      </li>
    );
  };

  return (
    <div
      className={classnames(style.outerWrapper, {
        [style.open]: open
      })}
    >
      <div ref={wrapperRef} className={classnames(style.wrapper, className)} aria-label={ariaLabel}>
        <button
          type="button"
          className={style.display}
          onClick={handleToggle}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={open ? `${componentId}-listbox` : undefined}
          id={componentId}
        >
          <div className={style.content}>
            <span className={style.label}>{placeholder}</span>
            {selectedOption ? <span className={style.value}>{selectedOption.label}</span> : null}
          </div>
          <span className={classnames(style.iconWrapper, {[style.open]: open})}>
            <FontAwesomeIcon
              className={classnames(style.icon, {[style.rotated]: open})}
              icon={iconClosed as IconName}
            />
          </span>
        </button>
        {open ? (
          <ul id={`${componentId}-listbox`} className={style.menu} role="listbox">
            {options.map(renderOption)}
          </ul>
        ) : null}
      </div>
    </div>
  );
};

InputSelect.propTypes = propTypes;

export default InputSelect;
