import React from 'react';
import classnames from 'classnames';
import style from './style.css';

const Loader = ({className}) => {
  return (
    <div className={classnames(style.container, className)}>
      <div className={style.dot} />
      <div className={style.dot} />
      <div className={style.dot} />
      <div className={style.dot} />
    </div>
  );
};

export default Loader;
