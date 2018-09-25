import React from 'react';
import PropTypes from 'prop-types';
import getOr from 'lodash/fp/getOr';
import Link from '../../atom/link';
import {container, content, closeCross, redirectionLink, imageContainer} from './style.css';

const SideNotification = ({header, body, imageURL, onClick, onClose}, context) => {
  const {skin} = context;

  const color = getOr('#00b0ff', 'common.primary', skin);

  return (
    <div onClick={() => onClick()} className={container}>
      <span
        className={closeCross}
        onClick={e => {
          e.stopPropagation();
          onClose();
        }}
      />
      <div className={imageContainer}>
        <img src={imageURL} alt="block-image" />
      </div>

      <div className={content}>
        <h5 style={{color}}> {header} </h5>
        <Link className={redirectionLink} onClick={onClick}>
          {body}
        </Link>
      </div>
    </div>
  );
};

SideNotification.prototype = {
  header: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired
};
export default SideNotification;
