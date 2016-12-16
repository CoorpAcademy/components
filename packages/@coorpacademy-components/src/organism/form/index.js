import Inferno from 'inferno';
import noop from 'lodash/fp/noop';
import {checker, createValidate} from '../../util/validation';
import FormGroup from '../../molecule/form-group';
import Button from '../../atom/button';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    title: checker.string,
    groups: checker.array,
    submitValue: checker.string.optional,
    resetValue: checker.string.optional,
    onSubmit: checker.func.optional,
    onReset: checker.func.optional
  }),
  children: checker.none
});

const Form = ({children, ...props}) => {
  const {
    groups,
    submitValue = '',
    resetValue = '',
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
        <Button
          type="reset"
          submitValue={submitValue}
          className={style.cancel}
        />
        <Button
          type="submit"
          submitValue={resetValue}
          className={style.save}
        />
      </div>
    </form>
  );
};

Form.validate = createValidate(conditions);
export default Form;
