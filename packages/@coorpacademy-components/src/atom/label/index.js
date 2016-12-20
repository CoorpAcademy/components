import React from 'react';
import {checker, createValidate} from '../../util/validation';
import style from './style.css';

const conditions = checker.shape({
  props: checker.none,
  children: checker.oneOrMore
});

const Label = ({children, ...props}) => {
  return (
    <span className={style.default}>
      {children}
    </span>
  );
};

Label.validate = createValidate(conditions);
export default Label;
