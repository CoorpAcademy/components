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
    onChange: checker.func.optional
  }),
  children: checker.none
});

export default (treant, options) => {
  const {h} = treant;

  const InputText = (props, children) => {
    const {
      title,
      placeholder,
      value,
      defaultValue,
      onChange = noop,
      error
    } = props;

    const className = error ? style.error : style.default;
    const inlineStyle = {
      backgroundColor: value
    };

    return (
      <div className={className}>
        <label>
          {`${title} `}
          <input
            type='text'
            name={title}
            placeholder={placeholder}
            defaultValue={defaultValue}
            value={value}
            onInput={e => onChange(e.target.value)}
          />
        </label>
        <span
          className={style.preview}
          style={inlineStyle}
        />
      </div>
    );
  };

  InputText.validate = createValidate(conditions);
  return InputText;
};
