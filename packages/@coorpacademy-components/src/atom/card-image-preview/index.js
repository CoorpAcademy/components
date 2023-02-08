import React from 'react';
import PropTypes from 'prop-types';
import {get} from 'lodash/fp';
import {NovaCompositionCoorpacademyPictures as PicturesIcon} from '@coorpacademy/nova-icons';
import Provider from '../provider';

import style from './style.css';

const CardImagePreview = ({image}, {skin}) => {
  const whiteColor = get('common.white', skin);
  const emptyIcon = !image ? (
    <PicturesIcon className={style.emptyIcon} style={{color: whiteColor}} />
  ) : null;

  return (
    <div
      className={style.image}
      style={{
        backgroundImage: image ? `url('${image}')` : 'none'
      }}
      data-name="card-image-preview"
    >
      {emptyIcon}
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
