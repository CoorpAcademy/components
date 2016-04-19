import style from './select-box.css';

const spanInline = (theme, skin) => {
  let color;

  switch(theme){
  case 'plain':
    color = skin && skin.theme.lock;
    break;
  default:
    color = skin && skin.texts.inverted;
  }

  return {
    borderColor: color
  };
};

const selectInline = (theme, skin) => {
  switch(theme){
  case 'plain':
    return {
      color: skin && skin.texts.normal,
      backgroundColor: skin && skin.backgrounds.input
    };
  default:
    return {};
  }
};

export default (engine, options) => {
  const {h} = engine;
  const {skin} = options;

  return (props) => {
    const {list, current, onChange, theme = 'default'} = props;
    const iconCode = String.fromCharCode(skin.icons.select);

    const selectOptions = list.map(function(item){
      return (
        <option
          className={style.option}
          value={item}
          selected={item === current}
        >
          {item}
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
