import React from 'react';
import {get, pipe, identity, uniqueId} from 'lodash/fp';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Provider from '../provider';
import style from './item.css';


const getTargetValueAndCall = fun => pipe(get('target.value'), fun);

const themeStyle = {
  setup: style.setup,
  coorpmanager: style.coorpmanager
};

const Item = (props, context) => {
  const idRadioButton = uniqueId('inputRadioButton');
  const {skin} = context;
  const {color, name, value, checked, label, onChange = identity, theme} = props;
  const defaultColor = color || get('common.primary', skin);
  const mainClass = themeStyle[theme];
  return (
    <div
      className={classNames(style.normal, mainClass)}
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
        className={classNames(style.label, checked && style.selected)}
        style={{
          color: !checked && defaultColor
        }}
        htmlFor={idRadioButton}
      >
        <span className={style.labelSpan} data-name={`radio-${value}`} title={label}>
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
  theme: PropTypes.string,
  checked: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func
};

export default Item;
