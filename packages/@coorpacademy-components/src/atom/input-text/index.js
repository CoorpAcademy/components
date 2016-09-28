import {checker, createValidate} from '../../util/validation';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    field: checker.shape({
      title: checker.string,
      placeholder: checker.string,
      value: checker.string,
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
      onChange = ''
    } = props.field;

    return (
      <div className={style.default}>
        <label>
          {title} <input
          type='text'
          name={title}
          placeholder={placeholder}
          defaultValue={value}
          onInput={onChange}/>
        </label>
      </div>
    );
  };

  InputText.validate = createValidate(conditions);
  return InputText;
};
