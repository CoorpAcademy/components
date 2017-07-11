import React from 'react';
import LinkedInput from 'react-linked-input';
import PropTypes from 'prop-types';
import noop from 'lodash/fp/noop';
import get from 'lodash/fp/get';
import Provider from '../../../atom/provider';
import style from './style.css';

const FreeText = (props, {skin}) => {
  const {placeholder = '', value, defaultValue, onChange = noop} = props;

  const handleChange = e => onChange(e.target.value);

  return (
    <div className={style.wrapper}>
      <LinkedInput
        type="text"
        className={style.input}
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={value}
        onInput={handleChange}
        onChange={noop}
        style={{
          color: get('common.primary', skin),
          borderColor: get('common.primary', skin)
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
