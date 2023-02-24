import React from 'react';
import ButtonLink from '../../atom/button-link';
import style from './style.css';
import {EmptyStateDashboardProps as Props, propTypes} from './types';

const EmptyStateDashboard = ({mainText, subText, imageUrl, buttonLink}: Props) => (
  <div className={style.container}>
    <div>
      {imageUrl && typeof imageUrl === 'string' ? (
        <img className={style.img} src={imageUrl} aria-hidden="true" />
      ) : null}
    </div>
    <p className={style.mainText}>{mainText}</p>
    <p className={style.subText}>{subText}</p>
    <div className={style.buttonContainer}>
      <ButtonLink {...buttonLink} className={style.button} />
    </div>
  </div>
);

EmptyStateDashboard.propTypes = propTypes;

export default EmptyStateDashboard;
