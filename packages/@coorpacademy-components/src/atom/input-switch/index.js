import noop from 'lodash/fp/noop';
import {checker, createValidate} from '../../util/validation';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    title: checker.string,
    value: checker.bool,
    disabled: checker.bool.optional,
    onChange: checker.func.optional,
    description: checker.string.optional
  }),
  children: checker.none
});

export default (treant, options) => {
  const {h} = treant;

  const InputSwitch = (props, children) => {
    const {
      title,
      value,
      disabled,
      onChange = noop,
      description
    } = props;

    const checked = value ? 'checked' : '';

    return (
      <div className={style.default}>
        <span className={style.title}>{`${title} `}</span>
        <input
          type='checkbox'
          id={title}
          name={title}
          onInput={e => onChange(e.target.value)}
          checked={checked}
          className={style.checkbox}
        />
        <label htmlFor={title}></label>
        <div className={style.description}>
          {description}
        </div>
      </div>
    );
  };

  InputSwitch.validate = createValidate(conditions);
  return InputSwitch;
};
