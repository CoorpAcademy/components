import Inferno from 'inferno';
import noop from 'lodash/fp/noop';
import {checker, createValidate} from '../../util/validation';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    type: checker.string,
    placeholder: checker.string,
    disabled: checker.bool.optional,
    value: checker.string.optional,
    error: checker.string.optional,
    onChange: checker.func.optional,
    description: checker.string.optional
  }),
  children: checker.none
});

const InputTextarea = ({children, ...props}) => {
  const {
    title,
    placeholder,
    value,
    onChange = noop,
    error,
    description
  } = props;

  const className = error ? style.error : style.default;

  return (
    <div className={className}>
      <label>
        <span className={style.title}>{`${title} `}</span>
        <textarea
          resize='none'
          name={title}
          placeholder={placeholder}
          onInput={e => onChange(e.target.value)}
        >
          {value}
        </textarea>
      </label>
      <div className={style.description}>
        {description}
      </div>
    </div>
  );
};

InputTextarea.validate = createValidate(conditions);
export default InputTextarea;
