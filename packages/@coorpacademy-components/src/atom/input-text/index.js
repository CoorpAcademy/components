import {checker, createValidate} from '../../util/validation';
import style from './style.css';

const conditions = checker.shape({
  props: checker.none,
  children: checker.none
});

export default (treant, options) => {
  const {h} = treant;

  const InputText = (props, children) => (
    <div className={style.default}>
      <label>
        Color <input type="text" name="Name" placeholder="#000000" defaultValue="#ffffff"/>
      </label>
    </div>
  );

  InputText.validate = createValidate(conditions);
  return InputText;
};
