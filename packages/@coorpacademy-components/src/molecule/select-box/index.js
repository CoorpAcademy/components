import React, {PropTypes} from 'react';
import find from 'lodash/fp/find';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import style from './style.css';

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
  const {list = [], onChange, enabled = true} = props;
  const theme = enabled ? (props.theme || 'default') : 'disabled';
  const selectOptions = list.map(item => (
    <option
      key={item.value}
      className={style.option}
      value={item.value}
    >
      {item.name}
    </option>
  ));

  const selected = find({
    selected: true
  }, list);

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
        defaultValue={get('value', selected)}
      >
        {selectOptions}
      </select>
    </span>
  );
};

SelectBox.propTypes = {
  list: PropTypes.array.isRequired,
  theme: PropTypes.oneOf(['default', 'plain']),
  onChange: PropTypes.func.isRequired
};

export default SelectBox;
