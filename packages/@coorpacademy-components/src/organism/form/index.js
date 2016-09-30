import noop from 'lodash/fp/noop';
import {checker, createValidate} from '../../util/validation';
import HoverFillBehaviour from '../../behaviour/effects/hover-fill';
import createFormGroup from '../../molecule/form-group';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    title: checker.string,
    groups: checker.array,
    onSubmit: checker.func.optional,
    onReset: checker.func.optional
  }),
  children: checker.none
});

export default (treant, options = {}) => {
  const {h} = treant;
  const FormGroup = createFormGroup(treant, options);
  const HoverFill = HoverFillBehaviour(treant, options);

  const Form = (props, children) => {
    const {
      groups,
      onSubmit = noop,
      onReset = noop
    } = props;

    const prevent = fun => (e, ...argz) => {
      e.preventDefault();
      fun(e, ...argz);
    };

    return (
      <form
        className={style.form}
        onSubmit={prevent(onSubmit)}
        onReset={prevent(onReset)}
      >
        {groups.map((group, index) => (
          <FormGroup {...group}/>
        ))}
        <div className={style.buttons}>
          <HoverFill>
            <input
              type="reset"
              className={style.reset}
              value="Annuler"
            />
          </HoverFill>
          <HoverFill>
            <span className={style.save}>
              <input
                type="submit"
                value="Enregistrer"
              />
            </span>
          </HoverFill>
        </div>
      </form>
    );
  };

  Form.validate = createValidate(conditions);
  return Form;
};
