import React from 'react';
import noop from 'lodash/fp/noop';
import uniqueId from 'lodash/fp/uniqueId';
import {checker, createValidate} from '../../util/validation';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    title: checker.string,
    disabled: checker.bool.optional,
    required: checker.bool.optional,
    checked: checker.bool.optional,
    error: checker.bool.optional,
    onChange: checker.func.optional
  }),
  children: checker.none
});

const InputText = ({children, ...props}) => {
  const {
    checked,
    onChange = noop,
    error,
    disabled,
    required
  } = props;

  const idCheckbox = uniqueId('input-checkbox-');
  const className = error ? style.error : style.default;
  const title = `${props.title}${required ? '*' : ''} :`;

  return (
    <div className={className}>
      <span className={style.title}>{title}</span>
      <input
        type='checkbox'
        className={style.checkbox}
        name={title}
        id={idCheckbox}
        checked={checked}
        onChange={e => onChange(e.target.checked)}
        disabled={disabled}
      />
      <label
        htmlFor={idCheckbox}
      />
    </div>
  );
};

InputText.validate = createValidate(conditions);
export default InputText;
