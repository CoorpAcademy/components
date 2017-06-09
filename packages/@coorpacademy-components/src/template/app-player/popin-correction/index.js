import React from 'react';
import style from './style.css';

const PopinCorrection = props => {
  const {header = {}} = props;
  const {cta = {}} = header;
  const {onClick} = cta;

  return (
    <div className={style.wrapper}>
      <p>correction</p>
      <p>klf</p>
      <button onClick={onClick}>continue</button>
    </div>
  );
};

export default PopinCorrection;
