import React from 'react';
import PropTypes from 'prop-types';

import {NovaSolidDataTransferDataUpload1 as UploadIcon} from '@coorpacademy/nova-icons';
import {convert} from 'css-color-function';

import Loader from '../../atom/loader';

import style from './overlay.css';

export const Overlay = ({description, isLoading, iconColor}) => {
  const dropOverlay = (
    <React.Fragment>
      <div
        className={style.arrow}
        style={{border: `15px solid ${convert(`color(${iconColor} a(-90%))`)}`}}
      >
        <UploadIcon style={{color: iconColor}} className={style.icon} />
      </div>
      <p>{description}</p>
    </React.Fragment>
  );

  return <div className={style.overlay}>{isLoading ? <Loader /> : dropOverlay}</div>;
};

export default Overlay;

Overlay.propTypes = {
  description: PropTypes.string,
  isLoading: PropTypes.bool,
  iconColor: PropTypes.string
};
