import Inferno from 'inferno';
import noop from 'lodash/fp/noop';
import {checker, createValidate} from '../../util/validation';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    title: checker.string,
    placeholder: checker.string,
    defaultValue: checker.string.optional,
    value: checker.string.optional,
    error: checker.string.optional,
    onChange: checker.func.optional,
    description: checker.string.optional
  }),
  children: checker.none
});

const InputText = ({children, ...props}) => {
  const {
    title,
    placeholder,
    value,
    defaultValue,
    onChange = noop,
    error,
    description
  } = props;

  const className = error ? style.error : style.default;
  const inlineStyle = {
    backgroundColor: value
  };

  return (
    <div className={className}>
      <label>
        <span className={style.title}>{`${title} `}</span>
        <input
          type='text'
          name={title}
          placeholder={placeholder}
          defaultValue={defaultValue}
          value={value}
          onInput={e => onChange(e.target.value)}
        />
        <span
          className={style.preview}
          style={inlineStyle}
        />
      </label>
      <div className={style.description}>
        {description}
      </div>
    </div>
  );
};

InputText.validate = createValidate(conditions);
export default InputText;
