import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../atom/button';
import style from './style.css';

const BrandDownloadBox = props => {
  const {
    warning = '',
    description = '',
    href = '',
    submitValue = ''
  } = props;

  return (
    <div className={style.wrapper}>
      <div className={style.texts}>
        <i className={style.icon} />
        <span className={style.warning}>{warning}</span>
        <p className={style.description}>{description}</p>
      </div>
      <div className={style.buttonWrapper}>
        <Button
          className={style.button}
          type='a'
          href={href}
          submitValue={submitValue}
        />
      </div>
    </div>
  );
};

BrandDownloadBox.propTypes = {
  warning: PropTypes.string,
  description: PropTypes.string,
  href: PropTypes.string,
  submitValue: PropTypes.string
};

export default BrandDownloadBox;
