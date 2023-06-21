import React, {useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import {noop, uniqueId} from 'lodash/fp';
import Title from '../title';
import style from './style.css';
import {RadioWithTitleProps} from './types';

const RadioWithTitle = (props: RadioWithTitleProps) => {
  const {
    title,
    name,
    checked,
    onChange = noop,
    'data-name': dataName,
    'aria-label': ariaLabel
  } = props;
  const [_checked, setChecked] = useState(checked);

  const idRadio = uniqueId('input-radio-');
  const handleChange = useCallback(
    e => {
      onChange(e.target.checked);
      setChecked(!_checked);
    },
    [_checked, onChange]
  );

  return (
    <div className={style.container}>
      <label htmlFor={idRadio}>
        <input
          type="radio"
          id={idRadio}
          name={name}
          onChange={handleChange}
          checked={checked}
          className={style.radio}
          data-name={dataName}
          aria-label={ariaLabel}
        />
        <span className={style.title}>
          <Title {...title} />
        </span>
      </label>
    </div>
  );
};

RadioWithTitle.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  'aria-label': PropTypes.string,
  'data-name': PropTypes.string
};
export default RadioWithTitle;
