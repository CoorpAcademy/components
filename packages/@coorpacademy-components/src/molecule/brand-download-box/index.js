import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../atom/button';
import style from './style.css';

const BrandDownloadBox = props => {
  const {title = '', warning = '', description = '', href = '', submitValue = ''} = props;

  const type = warning
    ? <div className={style.texts}>
        <i className={style.icon} />
        <span className={style.warning}>{warning}</span>
        <p className={style.description}>{description}</p>
      </div>
    : <div className={style.titleTexts}>
        <span className={style.title}>{title}</span>
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
  title: PropTypes.string,
  warning: PropTypes.string,
  description: PropTypes.string,
  href: PropTypes.string,
  submitValue: PropTypes.string
};

export default BrandDownloadBox;
