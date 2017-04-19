import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/fp/noop';
import getClassState from '../../util/get-class-state';
import style from './style.css';

const InputText = props => {
  const {
    title,
    placeholder,
    value,
    onChange = noop,
    error,
    description,
    modified = false
  } = props;

  const handleChange = e => onChange(e.target.value);

  return (
    <div className={getClassState(style, modified, error)}>
      <label>
        <span
          className={style.title}
          style={{
            color: value
          }}
        >
          {`${title} `}
        </span>
        <input
          type='color'
          name={title}
          className={style.colorPicker}
          placeholder={placeholder}
          value={value}
          onInput={handleChange}
          onChange={noop}
        />
      </label>
      <div className={style.description}>
        {description}
      </div>
    </div>
  );
};

InputText.propTypes = {
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
  description: PropTypes.string,
  modified: PropTypes.bool
};

export default InputText;
