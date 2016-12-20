import React from 'react';
import {checker, createValidate} from '../../util/validation';
import addClassName from '../../util/add-class-name';
import style from './style.css';

const addBackgroundClass = addClassName(style.background);

const conditions = checker.shape({
  props: checker.shape({
    className: checker.string.optional,
    value: checker.number,
    max: checker.number,
    desc: checker.string.optional
  }),
  children: checker.none
});

const ProgressBar = ({children, ...props}) => {
  const {
    className,
    value,
    max,
    desc = ''
  } = props;

  const ratio = value / max;
  const percentage = Math.floor(ratio * 100);
  const text = `${percentage}%`;

  return (
    <div {...addBackgroundClass({className})}>
      <div
        className={style.progress}
        style={{
          width: `${percentage}%`
        }}
      />
      <p className={style.texts}>
        <span className={style.description}>{`${value}/${max} ${desc}`}</span>
        <span className={style.percentage}>{text}</span>
      </p>
    </div>
  );
};

ProgressBar.validate = createValidate(conditions);
export default ProgressBar;
