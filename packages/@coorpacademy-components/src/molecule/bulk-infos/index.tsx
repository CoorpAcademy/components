import React from 'react';
import ButtonLink from '../../atom/button-link';
import Loader from '../../atom/loader';
import style from './style.css';
import {BulkInfosProps as Props, propTypes} from './types';

const BulkInfos = ({
  mainText,
  subText,
  imageUrl,
  progression,
  firstButtonLink,
  secondButtonLink
}: Props) => (
  <div className={style.container}>
    <div className={style.header}>
      {imageUrl && typeof imageUrl === 'string' ? (
        <img className={style.img} src={imageUrl} aria-hidden="true" />
      ) : null}
      {progression !== undefined ? (
        <div className={style.loader}>
          <Loader theme="coorpmanager" />
        </div>
      ) : null}
    </div>
    <p className={style.mainText}>
      {`${mainText} ${progression !== undefined ? `${progression}%` : ''}`}
    </p>
    <p className={style.subText}>{subText}</p>
    <div className={style.buttonsContainer}>
      {firstButtonLink ? (
        <div className={style.buttonContainer}>
          <ButtonLink {...firstButtonLink} className={style.button} />
        </div>
      ) : null}
      {secondButtonLink ? (
        <div className={style.buttonContainer}>
          <ButtonLink {...secondButtonLink} className={style.button} />
        </div>
      ) : null}
    </div>
  </div>
);

BulkInfos.propTypes = propTypes;

export default BulkInfos;
