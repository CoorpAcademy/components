import noop from 'lodash/fp/noop';
import {checker, createValidate} from '../../util/validation';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    title: checker.string,
    placeholder: checker.string,
    defaultValue: checker.string.optional,
    disabled: checker.bool.optional,
    required: checker.bool.optional,
    value: checker.string.optional,
    error: checker.string.optional,
    onChange: checker.func.optional,
    description: checker.string.optional
  }),
  children: checker.none
});

export default (treant, options) => {
  const {h} = treant;

  const InputText = (props, children) => {
    const {
      placeholder,
      value,
      defaultValue,
      onChange = noop,
      error,
      description,
      disabled,
      required
    } = props;

    const className = error ? style.error : style.default;
    const title = `${props.title}${required ? '*' : ''}`;

    return (
      <div className={className}>
        <label>
          <span className={style.title}>{title}</span>
          <input
            type='text'
            name={title}
            placeholder={placeholder}
            defaultValue={defaultValue}
            value={value}
            onInput={e => onChange(e.target.value)}
            disabled={disabled}
          />
        </label>
        <div className={style.description}>
          {description}
        </div>
      </div>
    );
  };

  InputText.validate = createValidate(conditions);
  return InputText;
};
