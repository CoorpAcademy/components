import {checker, createValidate} from '../../util/validation';
import style from './style.css';

import HoverFillBehaviour from '../../behaviour/effects/hover-fill';
import createFormGroup from '../../molecule/form-group';

const conditions = checker.shape({
  props: checker.none,
  children: checker.none
});

export default (treant, options = {}) => {
  const Form = (props, children) => {
    const {h} = treant;
    const FormGroup = createFormGroup(treant, options);
    const HoverFill = HoverFillBehaviour(treant, options);

    const groups = [1, 2, 3];

    return (
      <form className={style.form}>
        {groups.map((group, index) => (
          <FormGroup />
        ))}
        <div className={style.buttons}>
          <HoverFill>
            <span className={style.save}>
              <input type="submit" value="Enregistrer"/>
            </span>
          </HoverFill>
        </div>
      </form>
    );
  };

  Form.validate = createValidate(conditions);
  return Form;
};
