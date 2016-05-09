import style from './titled-checkbox.css';

export default (engine, options) => {
  const {h} = engine;
  const {translate, skin} = options;

  return props => {
    const {state, onToggle} = props;
    const label = translate ? translate(state.label) : state.label;
    const icon = state.checked ? String.fromCharCode(skin.icons.success) : '';

    return (
      <div className={style.default}>
        <label className={style.box}
               style={{
                 background: '#654'
               }}
        >
          <span
            className={style.icon}
            style={{
              color: 'white'
            }}
          >
            {icon}
          </span>
          <input type="checkbox"
                 className={style.input}
                 checked={state.checked}
                 onChange={() => onToggle(state)}
          />
        </label>
        <span>{label}</span>
      </div>
    );
  };
};
