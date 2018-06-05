import React from 'react';
import get from 'lodash/fp/get';
import pipe from 'lodash/fp/pipe';
import identity from 'lodash/fp/identity';
import PropTypes from 'prop-types';
import uniqueId from 'lodash/fp/uniqueId';
import Provider from '../provider';
import style from './item.css';

const getTargetValueAndCall = fun => pipe(get('target.value'), fun);

const Item = (props, context) => {
  const idRadioButton = uniqueId('inputRadioButton');
  const {skin} = context;
  const {color, name, value, checked, label, onChange = identity} = props;
  const defaultColor = color || get('common.primary', skin);

  return (
    <div
      className={style.normal}
      style={{
        backgroundColor: checked && defaultColor,
        borderRightColor: defaultColor,
        color: !checked && defaultColor
      }}
    >
      <input
        type="radio"
        id={idRadioButton}
        className={style.radio}
        name={name}
        value={value}
        checked={checked}
        onChange={getTargetValueAndCall(onChange)}
      />
      <label
        className={style.label}
        style={{
          color: !checked && defaultColor
        }}
        htmlFor={idRadioButton}
      >
        <span className={style.labelSpan} data-name="micro-radio" title={label}>
          {label}
        </span>
      </label>
    </div>
  );
};

Item.contextTypes = {
  skin: Provider.childContextTypes.skin
};
Item.propTypes = {
  color: PropTypes.string,
  value: PropTypes.string.isRequired,
  name: PropTypes.string,
  checked: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func
};

export default Item;
