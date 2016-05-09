import style from './titled-checkbox.css';
import createIconSuccess from '../../atom/icon/success';

export default (engine, options) => {
  const {h} = engine;
  const {translate, skin} = options;
  const IconSuccess = createIconSuccess(engine, options);

  return props => {
    const {state, onToggle} = props;
    const label = translate ? translate(state.label) : state.label;

    return (
      <div className={style.default}>
        <label className={style.label}
        >
          <div><IconSuccess/></div>

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
