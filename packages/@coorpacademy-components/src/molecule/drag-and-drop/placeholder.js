import React from 'react';
import PropTypes from 'prop-types';

import style from './placeholder.css';
import Button from '../../atom/button';

export const PlaceHolder = ({title, uploadLabel, primaryColor, buttonTitle}) => {
  return (
    <div className={style.dropZoneContainer}>
      <div className={style.title}>{title}</div>
      <div className={style.dropZone}>
        <p className={style.uploadLabel}>{uploadLabel}</p>
      </div>
      <div>
        <Button data-name="cta"
                type="link"
                onClick={() => {}}
                submitValue={buttonTitle}
                className={style.selectButton}
                style={{backgroundColor: primaryColor}}/>
      </div>
    </div>
  );
};

export default PlaceHolder;

PlaceHolder.propTypes = {
  title: PropTypes.string,
  uploadLabel: PropTypes.string
};
