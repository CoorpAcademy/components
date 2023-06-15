import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {noop, uniqueId} from 'lodash/fp';
import {NovaSolidStatusValidate as CheckIcon} from '@coorpacademy/nova-icons';
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

  const idCheckbox = uniqueId('input-radio-');
  const handleChange = useMemo(() => e => onChange(e.target.checked), [onChange]);

  return (
    <div className={style.container}>
      <label htmlFor={idCheckbox}>
        <input
          type="radio"
          id={idCheckbox}
          name={name}
          onChange={handleChange}
          checked={checked}
          className={style.checkbox}
          data-name={dataName}
          aria-label={ariaLabel}
        />
        <div className={style.label}>
          <CheckIcon className={style.icon} />
        </div>
      </label>
      <span className={style.title}>{title}</span>
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
