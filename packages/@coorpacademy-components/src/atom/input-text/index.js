import noop from 'lodash/fp/noop';
import {checker, createValidate} from '../../util/validation';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    field: checker.shape({
      title: checker.string,
      placeholder: checker.string,
      defaultValue: checker.string.optional,
      value: checker.string.optional,
      onChange: checker.func.optional
    })
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
      onChange = noop
    } = props.field;

    return (
      <div className={style.default}>
        <label>
          {title} <input
          type='text'
          name={title}
          placeholder={placeholder}
          defaultValue={defaultValue}
          value={value}
          onInput={e => onChange(e.target.value)}/>
        </label>
      </div>
    );
  };

  InputText.validate = createValidate(conditions);
  return InputText;
};
