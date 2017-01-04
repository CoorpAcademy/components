import React, {PropTypes} from 'react';
import noop from 'lodash/fp/noop';
import FormGroup from '../../molecule/form-group';
import Button from '../../atom/button';
import style from './style.css';

const Form = props => {
  const {
    groups = [],
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
        <FormGroup
          key={index}
          {...group}
        />
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

Form.propTypes = {
  title: PropTypes.string.isRequired,
  groups: PropTypes.array.isRequired,
  submitValue: PropTypes.string,
  resetValue: PropTypes.string,
  onSubmit: PropTypes.func,
  onReset: PropTypes.func
};

export default Form;
