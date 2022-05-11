import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {noop, uniqueId} from 'lodash/fp';
import {NovaSolidStatusValidate as CheckIcon} from '@coorpacademy/nova-icons';
import style from './style.css';

const CheckboxWithTitle = props => {
  const {
    title,
    name,
    checked,
    onChange = noop,
    'data-name': dataName,
    'aria-label': ariaLabel
  } = props;

  const idCheckbox = uniqueId('input-checkbox-');
  const handleChange = useMemo(() => e => onChange(e.target.checked), [onChange]);

  return (
    <div className={style.container}>
      <label htmlFor={idCheckbox}>
        <input
          type="checkbox"
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

CheckboxWithTitle.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  'aria-label': PropTypes.string,
  'data-name': PropTypes.string
};
export default CheckboxWithTitle;
