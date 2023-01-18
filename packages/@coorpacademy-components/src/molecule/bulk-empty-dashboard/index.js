import React from 'react';
import PropTypes from 'prop-types';
import ButtonLink from '../../atom/button-link';
import style from './style.css';

const BulkEmptyDashboard = ({mainText, subText, imageUrl, buttonLink}) => {
  return (
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
};

BulkEmptyDashboard.propTypes = {
  mainText: PropTypes.string,
  subText: PropTypes.string,
  imageUrl: PropTypes.string,
  buttonLink: PropTypes.shape({
    type: PropTypes.string,
    label: PropTypes.string,
    ariaLabel: PropTypes.string,
    dataName: PropTypes.string,
    icon: PropTypes.shape({
      position: PropTypes.string,
      type: PropTypes.string
    }),
    onClick: PropTypes.func
  })
};

export default BulkEmptyDashboard;
