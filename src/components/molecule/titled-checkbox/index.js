import { spec, validate, check } from '../../../util/proptypes-checker';
import style from './style.css';
import fixtures from './fixtures';

const conditions = {
  props: null,
  children: spec({
  })
};

export default (engine, options = {}) => {
  const {h} = engine;
  const {translate, skin} = options;
  const icons = skin && skin.icons;
  const iconSuccess = icons && String.fromCharCode(icons.success);

  const TitledCheckbox = (props, children) => {
    const {state, background, onToggle} = props;
    const label = translate ? translate(state.label) : state.label;
    const icon = state.checked ? iconSuccess : '';

    return (
      <div className={style.default}>
        <label className={style.box}
               style={{
                 background: background || '#3d3d3d'
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

  if (process.env.NODE_ENV !== 'production') {
    TitledCheckbox.validate = validate(conditions);
    TitledCheckbox.fixtures = fixtures;
  }

  return TitledCheckbox;
};
