import {checker, createValidate} from '../../util/validation';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    field: checker.shape({
      name: checker.string,
      placeholder: checker.string,
      value: checker.string,
      onChange: checker.string.optional
    })
  }),
  children: checker.none
});

export default (treant, options) => {
  const {h} = treant;
  const {translate} = options;

  const InputText = (props, children) => {
    const {
      name,
      placeholder,
      value,
      onChange = ''
    } = props.field;

    return (
      <div className={style.default}>
        <label>
          {translate(name)} <input
          type='text'
          name={name}
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
