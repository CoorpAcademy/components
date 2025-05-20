import React, {useState, useRef, useCallback} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import style from './style.css';

const COMPONENT_ID = 'input-select';

const InputSelect = ({
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
  const wrapperRef = useRef(null);

  const componentId = `${COMPONENT_ID}-${
    placeholder?.toLowerCase().replace(/\s+/g, '-') || 'default'
  }`;

  const handleToggle = useCallback(() => {
    setOpen(o => !o);
  }, []);

  const handleOnOptionClick = useCallback(
    optionValue => {
      onChange(optionValue);
      setOpen(false);
    },
    [onChange]
  );

  React.useEffect(() => {
    if (!open) return;
    const handleClickOutside = event => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  const selectedOption = options.find(opt => opt.value === value);

  const renderOption = option => {
    function handleClick() {
      handleOnOptionClick(option.value);
    }

    return (
      <li
        key={option.value}
        className={classnames(style.option, option.value === value && style.selected)}
        role="option"
        aria-selected={option.value === value}
        onClick={handleClick}
      >
        <span className={style.optionIcon}>{option.icon}</span>
        <span className={style.optionLabel}>{option.label}</span>
        {option.value === value ? (
          <span className={style.checkIcon}>
            <FontAwesomeIcon icon={selectedIcon} />
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
              icon={iconClosed}
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

InputSelect.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ),
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  'aria-label': PropTypes.string,
  iconClosed: PropTypes.string,
  selectedIcon: PropTypes.string
};

export default InputSelect;
