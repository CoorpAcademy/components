import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../../../atom/loader';
import CMPopin from '../../../molecule/cm-popin';
import style from './style.css';

const PlayerLoading = ({popinError}) => {
  return (
    <div className={style.wrapper}>{popinError ? <CMPopin {...popinError} /> : <Loader />}</div>
  );
};

PlayerLoading.propTypes = {
  popinError: PropTypes.shape(CMPopin.propTypes)
};

export default PlayerLoading;
