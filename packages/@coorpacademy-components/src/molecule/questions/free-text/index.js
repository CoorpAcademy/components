import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {noop, get} from 'lodash/fp';
import Provider from '../../../atom/provider';
import style from './style.css';

const FreeText = (props, {skin}) => {
  const {placeholder = '', value = '', onChange = noop} = props;

  const handleChange = useMemo(() => e => onChange(e.target.value), [onChange]);
  const skinView = value ? get('common.primary', skin) : null;

  return (
    <div data-name="freeText" className={style.wrapper}>
      <input
        type="text"
        className={style.input}
        placeholder={placeholder}
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
