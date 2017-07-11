import React from 'react';
import PropTypes from 'prop-types';
import LinkedInput from 'react-linked-input';
import noop from 'lodash/fp/noop';
import getClassState from '../../util/get-class-state';
import style from './style.css';

const InputText = props => {
  const {
    title,
    placeholder,
    value,
    defaultValue,
    onChange = noop,
    error,
    description,
    modified = false
  } = props;

  const inlineStyle = {
    backgroundColor: value
  };
  const handleChange = e => onChange(e.target.value);
  const className = getClassState(style.default, style.modified, style.error, modified, error);

  return (
    <div className={className}>
      <label>
        <span className={style.title}>{`${title} `}</span>
        <LinkedInput
          type="text"
          name={title}
          className={style.input}
          placeholder={placeholder}
          defaultValue={defaultValue}
          value={value}
          onInput={handleChange}
          onChange={noop}
        />
        <span className={style.preview} style={inlineStyle} />
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
  defaultValue: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
  description: PropTypes.string,
  modified: PropTypes.bool
};

export default InputText;
