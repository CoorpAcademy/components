import style from './titled-checkbox.css';

export default (engine, options) => {
  const {h} = engine;
  const {translate} = options;

  return props => {
    const {state, onToggle} = props;
    const label = translate ? translate(state.label) : state.label;

    return (
      <div className={style.default}>
        <span>{label}</span>
        <input type="checkbox"
               className={style.box}
               checked={state.checked}
               onChange={() => onToggle(state)}
        />
      </div>
    );
  };
};
