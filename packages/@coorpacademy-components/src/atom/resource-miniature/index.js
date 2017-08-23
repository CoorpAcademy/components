import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/fp/get';
import PlayIcon from '@coorpacademy/nova-icons/solid/audio/audio-control-play';
import PDFIcon from '@coorpacademy/nova-icons/line/files-office/file-office-pdf';
import Provider from '../provider';
import style from './style.css';

const STYLE_TYPES = {
  pdf: style.pdf,
  video: style.video
};

const ResourceMiniature = (props, context) => {
  const {skin} = context;
  const {type, description, poster, onClick: handleOnClick, selected = false} = props;
  const descriptionClassName = selected ? style.selectedDescription : style.description;
  const dark = get('common.dark', skin);
  const white = get('common.white', skin);
  const brand = get('common.brand', skin);
  const posterOutlineColor = selected ? brand : white;

  return (
    <div className={STYLE_TYPES[type]} onClick={handleOnClick}>
      <div className={style.posterWrapper} style={{borderColor: posterOutlineColor}}>
        <div className={style.poster} style={{backgroundImage: `url(${poster})`}} />
        {type === 'video' && !selected ? <PlayIcon color={white} className={style.icon} /> : null}
        {type === 'pdf' ? <PDFIcon className={style.icon} color={dark} /> : null}
      </div>
      <div className={descriptionClassName}>{description}</div>
    </div>
  );
};

ResourceMiniature.propTypes = {
  type: PropTypes.oneOf(Object.keys(STYLE_TYPES)),
  selected: PropTypes.bool,
  description: PropTypes.string,
  poster: PropTypes.string,
  onClick: PropTypes.func
};

ResourceMiniature.contextTypes = {
  skin: Provider.childContextTypes.skin
};

export default ResourceMiniature;
