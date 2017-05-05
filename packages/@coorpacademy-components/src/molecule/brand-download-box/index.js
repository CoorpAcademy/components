import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../atom/button';
import style from './style.css';

const BrandDownloadBox = props => {
  const {sso = '', warning = '', description = '', href = '', submitValue = ''} = props;

  const type = warning
    ? <div className={style.texts}>
        <i className={style.icon} />
        <span className={style.warning}>{warning}</span>
        <p className={style.description}>{description}</p>
      </div>
    : <div className={style.ssoTexts}>
        <span className={style.sso}>{sso}</span>
        <p className={style.description}>{description}</p>
      </div>;

  return (
    <div className={style.wrapper}>
      {type}
      <Button className={style.button} type="a" href={href} submitValue={submitValue} />
    </div>
  );
};

BrandDownloadBox.propTypes = {
  sso: PropTypes.string,
  warning: PropTypes.string,
  description: PropTypes.string,
  href: PropTypes.string,
  submitValue: PropTypes.string
};

export default BrandDownloadBox;
