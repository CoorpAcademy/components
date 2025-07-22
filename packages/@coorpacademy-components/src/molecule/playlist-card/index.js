import React from 'react';
import PropTypes from 'prop-types';
import {COLORS} from '../../variables/colors';
import Provider from '../../atom/provider';
import Tag from '../../atom/tag';
import ProgressBar from '../progress-bar';
import style from './style.css';

const PlaylistCard = (props, context) => {
  const {
    label,
    title,
    courseCount,
    progress = 0,
    imgUrl,
    onClick,
    locales: {playlistTag, coursesLabel}
  } = props;

  return (
    <div className={style.container} data-name={`playlist-card-${label}`} onClick={onClick}>
      <div className={style.imageContainer}>
        <img src={imgUrl} />
      </div>
      <div className={style.detailWrapper}>
        <div className={style.titleWrapper}>
          <Tag label={playlistTag} size="S" />
          <div className={style.title} data-name="playlist-title">
            {title}
          </div>
          <div className={style.courseCount}>
            {courseCount} {coursesLabel}
          </div>
        </div>
        <ProgressBar
          className={style.customProgressBar}
          style={{backgroundColor: COLORS.cm_positive_500}}
          displayInfo={false}
          value={progress}
          max={100}
        />
      </div>
    </div>
  );
};

PlaylistCard.contextTypes = {
  translate: Provider.childContextTypes.translate
};

PlaylistCard.propTypes = {
  label: PropTypes.string,
  title: PropTypes.string.isRequired,
  courseCount: PropTypes.number.isRequired,
  progress: PropTypes.number,
  imgUrl: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  locales: PropTypes.shape({
    playlistTag: PropTypes.string,
    coursesLabel: PropTypes.string
  })
};

PlaylistCard.defaultProps = {
  locales: {
    playlistTag: 'Playlist',
    coursesLabel: 'courses'
  }
};

export default PlaylistCard;
