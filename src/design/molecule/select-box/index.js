import style from './select-box.css';

export default (engine, options) => {
  const {h} = engine;
  const {skin} = options;

  return (props) => {
    const {list, current, onChange} = props;
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
      <span className={style.default}
            attributes={{
              'data-icon': iconCode
            }}>
        <select className={style.selector}
                onChange={onChange}
        >
          {selectOptions}
        </select>
      </span>
    );
  };
};
