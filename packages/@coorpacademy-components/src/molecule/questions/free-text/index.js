import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/fp/noop';
import style from './style.css';

const FreeText = (props, context) => {
  const {placeholder = '', value, defaultValue, onChange = noop} = props;

  const handleChange = e => onChange(e.target.value);

  return (
    <div className={style.wrapper}>
      <input
        type="text"
        className={style.input}
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={value}
        onInput={handleChange}
        onChange={noop}
      />
    </div>
  );
};

FreeText.contextTypes = {
  skin: PropTypes.object
};

FreeText.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default FreeText;
