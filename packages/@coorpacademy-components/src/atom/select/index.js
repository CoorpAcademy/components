import {checker, createValidate} from '../../util/validation';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    title: checker.string,
    value: checker.string.optional,
    disabled: checker.bool.optional,
    required: checker.bool.optional,
    onChange: checker.func.optional,
    options: checker.arrayOf(checker.shape({
      name: checker.string,
      value: checker.string.optional,
      selected: checker.bool
    }))
  }),
  children: checker.none
});

export default (treant, options) => {
  const {h} = treant;

  const Select = (props, children) => {
    const {
      onChange,
      disabled,
      required,
      theme
    } = props;

    const title = `${props.title}${required ? '*' : ''} :`;

    const optionList = props.options && props.options.map(option => {
      return (
        <option
          value={option.value}
          selected={option.selected}
        >
          {option.name}
        </option>
      );
    });

    return (
      <div className={props.theme ? style[props.theme] : style.default}>
        <label>
          <span className={style.title}>{title}</span>
          <select onChange={e => onChange(e.target.value)} disabled={disabled}>
            {optionList}
          </select>
        </label>
      </div>
    );
  };

  Select.validate = createValidate(conditions);
  return Select;
};
