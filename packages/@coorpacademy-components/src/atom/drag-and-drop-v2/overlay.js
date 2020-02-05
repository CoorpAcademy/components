import React from 'react';
import PropTypes from 'prop-types';
import {NovaSolidDataTransferDataUpload1 as UploadIcon} from '@coorpacademy/nova-icons';
import Provider from '../provider';

import Loader from '../loader';

import style from './overlay.css';

export const Overlay = ({description, isLoading}) => {
  const dropOverlay = (
    <React.Fragment>
      <div className={style.arrow}>
        <UploadIcon className={style.icon} />
      </div>
      <p>{description}</p>
    </React.Fragment>
  );

  return <div className={style.overlay}>{isLoading ? <Loader /> : dropOverlay}</div>;
};

export default Overlay;

Overlay.contextTypes = {
  skin: Provider.childContextTypes.skin
};

Overlay.propTypes = {
  description: PropTypes.string
};
