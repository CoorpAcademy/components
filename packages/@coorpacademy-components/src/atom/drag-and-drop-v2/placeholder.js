import React from 'react';
import PropTypes from 'prop-types';

import style from './placeholder.css';

export const PlaceHolder = ({title, uploadLabel}) => {
  return (
    <div className={style.dropZoneContainer}>
      <div className={style.title}>{title}</div>
      <div className={style.dropZone}>
        <p className={style.uploadLabel}>{uploadLabel}</p>
      </div>
    </div>
  );
};

export default PlaceHolder;

PlaceHolder.propTypes = {
  title: PropTypes.string,
  uploadLabel: PropTypes.string
};
