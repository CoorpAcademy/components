import React from 'react';
import {checker, createValidate} from '../../util/validation';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    title: checker.string,
    value: checker.string.optional,
    description: checker.string.optional
  }),
  children: checker.none
});

const InputReadonly = ({children, ...props}) => {
  const {
    title,
    value,
    description
  } = props;

  return (
    <div className={style.wrapper}>
      <div className={style.title}>
        {title}
      </div>
      <div className={style.value}>
        {value}
      </div>
      <div className={style.description}>
        {description}
      </div>
    </div>
  );
};

InputReadonly.validate = createValidate(conditions);
export default InputReadonly;
