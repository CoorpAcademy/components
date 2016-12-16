import Inferno from 'inferno';
import noop from 'lodash/fp/noop';
import {checker, createValidate} from '../../util/validation';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    title: checker.string,
    value: checker.bool.optional,
    disabled: checker.bool.optional,
    onChange: checker.func.optional,
    description: checker.string.optional
  }),
  children: checker.none
});

const InputSwitch = ({children, ...props}) => {
  const {
    title,
    value,
    disabled,
    onChange = noop,
    description
  } = props;

  const isDisabled = disabled ? 'disabled' : '';
  const isUnset = value === undefined;

  return (
    <div className={isUnset ? style.unset : style.default}>
      <span className={style.title}>{`${title} `}</span>
      <input
        type='checkbox'
        id={title}
        name={title}
        onChange={e => onChange(e.target.checked)}
        checked={value}
        disabled={isDisabled}
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
export default InputSwitch;
