import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/fp/noop';
import get from 'lodash/fp/get';
import Provider from '../../../atom/provider';
import style from './style.css';

const FreeText = (props, {skin}) => {
  const {placeholder = '', value, defaultValue, onChange = noop} = props;

  const handleChange = e => onChange(e.target.value);
  const skinView = value || defaultValue ? get('common.primary', skin) : null;

  return (
    <div data-name="freeText" className={style.wrapper}>
      <input
        type="text"
        className={style.input}
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={value}
        onInput={handleChange}
        onChange={noop}
        style={{
          color: skinView,
          borderColor: skinView
        }}
      />
    </div>
  );
};

FreeText.contextTypes = {
  skin: Provider.childContextTypes.skin
};

FreeText.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default FreeText;
