import React from 'react';
import PopinHeader from '../../../molecule/app-player/popin/popin-header';
import style from './style.css';

const PopinCorrection = props => {
  const {header = {}} = props;

  return (
    <div className={style.wrapper}>
      <PopinHeader {...header} />
    </div>
  );
};

export default PopinCorrection;
