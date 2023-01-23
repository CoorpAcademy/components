import React from 'react';
import ButtonLink from '../../atom/button-link';
import style from './style.css';
import {Props, propTypes} from './types';

const BulkEmptyDashboard = ({mainText, subText, imageUrl, buttonLink}: Props) => (
  <div className={style.container}>
    <div>
      <img className={style.img} src={imageUrl} aria-hidden="true" />
    </div>
    <p className={style.mainText}>{mainText}</p>
    <p className={style.subText}>{subText}</p>
    <div className={style.buttonContainer}>
      <ButtonLink {...buttonLink} className={style.button} />
    </div>
  </div>
);

BulkEmptyDashboard.propTypes = propTypes;

export default BulkEmptyDashboard;
