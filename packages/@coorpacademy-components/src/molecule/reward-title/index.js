import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {noop, uniqueId} from 'lodash/fp';
import {NovaSolidStatusValidate as CheckIcon} from '@coorpacademy/nova-icons';
import style from './style.css';

const InputSwitch = props => {
  const {title, name, checked, disabled, onChange = noop} = props;

  const idCheckbox = uniqueId('input-checkbox-');
  const handleChange = useMemo(() => e => onChange(e.target.checked), [onChange]);

  return (
    <label className={style.default} htmlFor={idCheckbox}>
      <input
        type="checkbox"
        id={idCheckbox}
        name={name}
        onChange={handleChange}
        checked={checked}
        disabled={disabled}
        className={style.checkbox}
      />
      <div className={style.label}>
        <CheckIcon className={style.icon} />
      </div>
      <span className={style.title}>{`${title} `}</span>
    </label>
  );
};

InputSwitch.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func
};
export default InputSwitch;
