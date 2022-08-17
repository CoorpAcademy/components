import React from 'react';
import PropTypes from 'prop-types';
import {get, keys} from 'lodash/fp';
import {
  NovaSolidAudioAudioControlPlay as PlayIcon,
  NovaLineFilesOfficeFileOfficePdf as PDFIcon,
  NovaCompositionCoorpacademyMicrophone as PodcastIcon
} from '@coorpacademy/nova-icons';
import classnames from 'classnames';
import Provider from '../provider';
import style from './style.css';

const TYPES = {
  pdf: {style: style.pdf, icon: PDFIcon},
  audio: {style: style.audio, icon: PodcastIcon},
  video: {style: style.video, icon: PlayIcon}
};

const ResourceMiniature = (props, context) => {
  const {skin} = context;
  const {type, description, poster, onClick: handleOnClick, selected = false} = props;
  const descriptionClassName = selected ? style.selectedDescription : style.description;
  const white = get('common.white', skin);
  const primary = get('common.primary', skin);
  const posterOutlineColor = selected ? primary : white;
  const Icon = TYPES[type].icon;
  return (
    <div className={TYPES[type].style} onClick={handleOnClick} data-type={type}>
      <div className={style.posterWrapper} style={{borderColor: posterOutlineColor}}>
        <div className={style.poster} style={{backgroundImage: `url(${poster})`}} />
        {!selected ? <Icon color={white} className={style.icon} /> : null}
      </div>
      <div
        className={classnames(descriptionClassName, style.innerHTML)}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{__html: description}}
      />
    </div>
  );
};

ResourceMiniature.propTypes = {
  type: PropTypes.oneOf(keys(TYPES)),
  selected: PropTypes.bool,
  description: PropTypes.string,
  poster: PropTypes.string,
  onClick: PropTypes.func
};

ResourceMiniature.contextTypes = {
  skin: Provider.childContextTypes.skin
};

export default ResourceMiniature;
