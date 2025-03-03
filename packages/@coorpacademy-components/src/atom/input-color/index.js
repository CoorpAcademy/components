import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {noop} from 'lodash/fp';
import getClassState from '../../util/get-class-state';
import style from './style.css';

const InputColor = props => {
  const {
    title,
    name,
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
  const handleChange = useMemo(() => e => onChange(e.target.value), [onChange]);
  const className = getClassState(style.defaultStyle, style.modified, style.error, modified, error);

  return (
    <div className={className}>
      <label>
        <span className={style.title}>{`${title} `}</span>
        <input
          type="text"
          name={name}
          className={style.input}
          placeholder={placeholder}
          defaultValue={defaultValue}
          value={value}
          onInput={handleChange}
          onChange={noop}
        />
        <span className={style.preview} style={inlineStyle} />
      </label>
      <div className={style.description}>{description}</div>
    </div>
  );
};

InputColor.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
  description: PropTypes.string,
  modified: PropTypes.bool
};

export default InputColor;
