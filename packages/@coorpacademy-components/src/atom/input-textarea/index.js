import React from 'react';
import PropTypes from 'prop-types';
import {noop} from 'lodash/fp';
import style from './style.css';

const InputTextarea = props => {
  const {title, name, placeholder, value, onChange = noop, error, description, disabled} = props;

  const className = error ? style.error : style.default;
  const handleChange = e => onChange(e.target.value);

  return (
    <div className={className}>
      <label>
        <span className={style.title}>{`${title} `}</span>
        <textarea
          name={name}
          defaultValue={value}
          placeholder={placeholder}
          onInput={handleChange}
          disabled={disabled}
          style={{
            resize: 'none'
          }}
        />
      </label>
      <div className={style.description}>{description}</div>
    </div>
  );
};

InputTextarea.propTypes = {
  placeholder: PropTypes.string,
  title: PropTypes.string,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
  description: PropTypes.string
};
export default InputTextarea;
