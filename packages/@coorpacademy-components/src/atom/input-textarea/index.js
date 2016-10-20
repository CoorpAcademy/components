import noop from 'lodash/fp/noop';
import {checker, createValidate} from '../../util/validation';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    title: checker.string,
    type: checker.string,
    placeholder: checker.string,
    defaultValue: checker.string.optional,
    disabled: checker.bool.optional,
    value: checker.string.optional,
    error: checker.string.optional,
    onChange: checker.func.optional,
    description: checker.string.optional
  }),
  children: checker.none
});

export default (treant, options) => {
  const {h} = treant;

  const InputTextarea = (props, children) => {
    const {
      type,
      title,
      placeholder,
      value,
      defaultValue,
      onChange = noop,
      error,
      description
    } = props;

    const className = error ? style.error : style.default;

    return (
      <div className={className}>
        <label>
          <span className={style.title}>{`${title} `}</span>
          <input
            type='textarea'
            resize='none'
            name={title}
            placeholder={placeholder}
            defaultValue={defaultValue}
            value={value}
            onInput={e => onChange(e.target.value)}
          />
        </label>
        <div className={style.description}>
          {description}
        </div>
      </div>
    );
  };

  InputTextarea.validate = createValidate(conditions);
  return InputTextarea;
};
