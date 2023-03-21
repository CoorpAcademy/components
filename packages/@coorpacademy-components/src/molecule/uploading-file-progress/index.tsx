import React from 'react';
import ButtonLink from '../../atom/button-link';
import Loader from '../../atom/loader';
import style from './style.css';
import {UploadingFileProgressProps as Props, propTypes} from './types';

const UploadingFileProgress = ({
  mainText,
  subText,
  progressionValue,
  leftButtonLink,
  rightButtonLink
}: Props) => (
  <div>
    <div className={style.loaderWrapper}>
      <div className={style.loader}>
        <Loader theme="coorpmanager" />
      </div>
    </div>
    <div className={style.container}>
      <p className={style.mainText}>
        {mainText}
        <span className={style.progressionValue}> {progressionValue}%</span>
      </p>
      <p className={style.subText}>{subText}</p>
      <div className={style.buttonContainer}>
        <ButtonLink {...leftButtonLink} className={style.leftButtonLink} />
        <ButtonLink {...rightButtonLink} className={style.rightButtonLink} />
      </div>
    </div>
  </div>
);

UploadingFileProgress.propTypes = propTypes;

export default UploadingFileProgress;
