import React, {useCallback} from 'react';
import {noop, uniqueId} from 'lodash/fp';
import Title from '../title';
import style from './style.css';
import {propTypes, RadioWithTitleProps} from './types';

const RadioWithTitle = (props: RadioWithTitleProps) => {
  const {
    title,
    name,
    checked,
    onChange = noop,
    'data-name': dataName,
    'aria-label': ariaLabel
  } = props;
  const idRadio = uniqueId('input-radio-');
  const handleChange = useCallback(e => onChange(e.target.checked), [onChange]);

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

RadioWithTitle.propTypes = propTypes;

export default RadioWithTitle;
