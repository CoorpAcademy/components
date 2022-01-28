import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {get} from 'lodash/fp';
import {NovaCompositionCoorpacademyPictures as PicturesIcon} from '@coorpacademy/nova-icons';
import Provider from '../provider';

import style from './style.css';

const CardImagePreview = ({image}, {skin}) => {
  const primaryColor = get('common.primary', skin);
  const whiteColor = get('common.white', skin);
  const emptyIcon = !image ? <PicturesIcon className={style.emptyIcon} color={whiteColor} /> : null;

  return (
    <div className={style.container} data-name="card-image-preview">
      <div
        data-name="cover"
        className={style.image}
        style={{
          backgroundColor: primaryColor,
          backgroundImage: image ? `url('${image}')` : 'none'
        }}
      >
        {emptyIcon}
      </div>
    </div>
  );
};

CardImagePreview.contextTypes = {
  skin: Provider.childContextTypes.skin
};

CardImagePreview.propTypes = {
  image: PropTypes.string
};
export default CardImagePreview;
