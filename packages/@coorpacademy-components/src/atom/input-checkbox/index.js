import React, {PropTypes} from 'react';
import noop from 'lodash/fp/noop';
import uniqueId from 'lodash/fp/uniqueId';
import style from './style.css';

const InputCheckbox = props => {
  const {
    checked,
    onChange = noop,
    error,
    disabled,
    required
  } = props;

  const idCheckbox = uniqueId('input-checkbox-');
  const className = error ? style.error : style.default;
  const title = `${props.title}${required ? '*' : ''} :`;
  const handleChange = e => onChange(e.target.checked);

  return (
    <div className={className}>
      <span className={style.title}>{title}</span>
      <input
        type='checkbox'
        className={style.checkbox}
        name={title}
        id={idCheckbox}
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
      />
      <label
        htmlFor={idCheckbox}
      />
    </div>
  );
};

InputCheckbox.propTypes = {
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  checked: PropTypes.bool,
  error: PropTypes.bool,
  onChange: PropTypes.func
};

export default InputCheckbox;
