import React from 'react';
import PropTypes from 'prop-types';
import {get, keys} from 'lodash/fp';
import {
  NovaSolidAudioAudioControlPlay as PlayIcon,
  NovaLineFilesOfficeFileOfficePdf as PDFIcon
} from '@coorpacademy/nova-icons';
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
  const primary = get('common.primary', skin);
  const posterOutlineColor = selected ? primary : white;

  return (
    <div className={STYLE_TYPES[type]} onClick={handleOnClick} data-type={type}>
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
  type: PropTypes.oneOf(keys(STYLE_TYPES)),
  selected: PropTypes.bool,
  description: PropTypes.string,
  poster: PropTypes.string,
  onClick: PropTypes.func
};

ResourceMiniature.contextTypes = {
  skin: Provider.childContextTypes.skin
};

export default ResourceMiniature;
