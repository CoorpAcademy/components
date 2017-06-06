import React from 'react';
import Loader from '../../../atom/loader';
import style from './style.css';

const PlayerLoading = props => {
  return (
    <div className={style.wrapper}>
      <Loader />
    </div>
  );
};

export default PlayerLoading;
