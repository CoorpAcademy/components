import React from 'react';
import style from './style.css';

const Loader = () => {
  return (
    <div className={style.container}>
      <div className={style.dot}></div>
      <div className={style.dot}></div>
      <div className={style.dot}></div>
      <div className={style.dot}></div>
    </div>
  );
};

export default Loader;
