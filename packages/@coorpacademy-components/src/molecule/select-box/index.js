import React from 'react';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import {checker, createValidate} from '../../util/validation';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    list: checker.array,
    theme: checker.oneOf(['default', 'plain']).optional,
    onChange: checker.func
  }).strict,
  children: checker.none
});

const spanInline = (theme, skin) => {
  const color = {
    plain: get('common.lock', skin),
    default: get('texts.inverted', skin),
    disabled: get('common.disabled', skin)
  };

  return {
    borderColor: color[theme],
    color: color[theme]
  };
};

const selectInline = (theme, skin) => {
  const inline = {
    plain: {
      color: get('texts.normal', skin),
      backgroundColor: get('backgrounds.input', skin)
    },
    disabled: {
      color: get('common.disabled', skin),
      backgroundColor: get('backgrounds.input', skin)
    },
    default: {}
  };

  return inline[theme];
};

const SelectBox = ({children, ...props}, {skin}) => {
  const code = getOr('', 'icons.select', skin);
  const iconCode = String.fromCharCode(code);
  const {list, onChange, enabled = true} = props;
  const theme = enabled ? (props.theme || 'default') : 'disabled';
  const selectOptions = list.map(item => (
    <option
      className={style.option}
      value={item.value}
      selected={item.selected}
    >
      {item.name}
    </option>
  ));

  return (
    <span
      className={style[theme]}
      style={spanInline(theme, skin)}
      attributes={{
        'data-icon': iconCode
      }}
    >
      <select
        disabled={!enabled || undefined}
        onChange={onChange}
        style={selectInline(theme, skin)}
      >
        {selectOptions}
      </select>
    </span>
  );
};

SelectBox.validate = createValidate(conditions);
export default SelectBox;
