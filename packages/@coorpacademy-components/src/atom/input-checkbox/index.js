import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/fp/noop';
import uniqueId from 'lodash/fp/uniqueId';
import getClassState from '../../util/get-class-state';
import style from './style.css';

const InputCheckbox = props => {
  const {
    checked,
    onChange = noop,
    error,
    disabled,
    required,
    modified = false
  } = props;

  const idCheckbox = uniqueId('input-checkbox-');
  const title = `${props.title}${required ? '*' : ''} :`;
  const handleChange = e => onChange(e.target.checked);
  const className = getClassState(style.default, style.modified, style.error, modified, error);

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
  onChange: PropTypes.func,
  modified: PropTypes.bool
};

export default InputCheckbox;
