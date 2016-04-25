import style from './select-box.css';
import get from 'lodash/fp/get';

const spanInline = (theme, skin) => {
  const color = {
    plain: get('theme.lock', skin),
    default: get('texts.inverted', skin)
  };

  return {
    borderColor: color[theme]
  };
};

const selectInline = (theme, skin) => {
  const inline = {
    plain: {
      color: get('texts.normal', skin),
      backgroundColor: get('backgrounds.input', skin)
    },
    default: {}
  };

  return inline[theme];
};

export default (engine, options) => {
  const {h} = engine;
  const {skin} = options;

  return (props) => {
    const {list, onChange, theme = 'default'} = props;
    const iconCode = String.fromCharCode(skin.icons.select);

    const selectOptions = list.map(function(item){
      return (
        <option
          className={style.option}
          value={item.value}
          selected={item.selected}
        >
          {item.name}
        </option>
      );
    });

    return (
      <span
        className={style[theme]}
        style={spanInline(theme, skin)}
        attributes={{
          'data-icon': iconCode
        }}
      >
        <select
          onChange={onChange}
          style={selectInline(theme, skin)}
        >
          {selectOptions}
        </select>
      </span>
    );
  };
};
