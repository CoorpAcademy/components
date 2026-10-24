import classnames from 'classnames';
import React from 'react';
import {get, map} from 'lodash/fp';
import PropTypes from 'prop-types';
import Provider from '../provider';
import style from './style.css';

import Item from './item';

const themeStyle = {
  setup: style.setup,
  coorpmanager: style.coorpmanager
};

const renderSegmentedControl = ({options, value, onChange, 'aria-label': ariaLabel}) => {
  const activate = nextValue => {
    if (nextValue !== value) onChange(nextValue);
  };
  function handleClick(event) {
    activate(event.currentTarget.value);
  }

  function handleKeyDown(event) {
    const {key, currentTarget} = event;
    if (!['ArrowRight', 'ArrowDown', 'ArrowLeft', 'ArrowUp'].includes(key)) return;
    event.preventDefault();
    const index = options.findIndex(option => option.value === currentTarget.value);
    const direction = key === 'ArrowRight' || key === 'ArrowDown' ? 1 : -1;
    const destination = (index + direction + options.length) % options.length;
    currentTarget.parentElement.children[destination].focus();
    activate(options[destination].value);
  }

  return (
    <div role="radiogroup" aria-label={ariaLabel} className={style.segmented}>
      {options.map(option => (
        <button
          key={option.value}
          type="button"
          role="radio"
          value={option.value}
          aria-checked={option.value === value}
          tabIndex={option.value === value ? 0 : -1}
          className={style.segmentedOption}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

const RadioGroup = (props, context) => {
  const {options} = props;
  if (options) return renderSegmentedControl(props);
  const {list = [], onChange, color, className, theme = 'setup'} = props;
  const {skin} = context;
  const borderColor = color || get('common.primary', skin);
  const mainClass = themeStyle[theme];
  const items = map(itemProps => {
    return (
      <Item {...itemProps} color={color} theme={theme} onChange={onChange} key={itemProps.value} />
    );
  }, list);

  return (
    <div className={classnames([mainClass, style.container, className])} style={{borderColor}}>
      {items}
    </div>
  );
};

RadioGroup.contextTypes = {
  skin: Provider.childContextTypes.skin
};

RadioGroup.propTypes = {
  color: PropTypes.string,
  theme: PropTypes.string,
  className: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })
  ),
  value: PropTypes.string,
  'aria-label': PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.shape(Item.propTypes)),
  onChange: PropTypes.func
};

export default RadioGroup;
