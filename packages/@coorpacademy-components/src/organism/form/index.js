import {checker, createValidate} from '../../util/validation';
import HoverFillBehaviour from '../../behaviour/effects/hover-fill';
import createFormGroup from '../../molecule/form-group';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    form: checker.shape({
      title: checker.string,
      groups: checker.array
    })
  }),
  children: checker.none
});

export default (treant, options = {}) => {
  const {h} = treant;

  const Form = (props, children) => {
    const FormGroup = createFormGroup(treant, options);
    const HoverFill = HoverFillBehaviour(treant, options);

    const {groups} = props.form;

    return (
      <form className={style.form}>
        {groups.map((group, index) => (
          <FormGroup group={group}/>
        ))}
        <div className={style.buttons}>
          <HoverFill>
            <button className={style.reset}>Annuler</button>
          </HoverFill>
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
