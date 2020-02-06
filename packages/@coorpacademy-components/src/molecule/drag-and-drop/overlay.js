import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/fp/get';
import {NovaSolidDataTransferDataUpload1 as UploadIcon} from '@coorpacademy/nova-icons';
import {convert} from 'css-color-function';
import Provider from '../../atom/provider';

import Loader from '../../atom/loader';

import style from './overlay.css';

export const Overlay = ({description, isLoading}, context) => {
  const primaryColor = get('skin.common.primary', context);
  const dropOverlay = (
    <React.Fragment>
      <div
        className={style.arrow}
        style={{border: `15px solid ${convert(`color(${primaryColor} a(-20%))`)}`}}
      >
        <UploadIcon color={primaryColor} />
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
