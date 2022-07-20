import React from 'react';
import Loader from '../../../atom/loader';
import style from './style.css';

const PlayerLoading = () => {
  return (
    <div className={style.wrapper}>
      <Loader />
    </div>
  );
};

PlayerLoading.propTypes = {};

export default PlayerLoading;
