import React from 'react';
import PropTypes from 'prop-types';
import {COLORS} from '../../variables/colors';
import Provider from '../../atom/provider';
import Tag from '../../atom/tag';
import ProgressBar from '../progress-bar';
import PlaylistDetailCover from '../playlist-detail-cover';
import style from './style.css';

const PlaylistCard = (props, context) => {
  const {
    type,
    label,
    title,
    progress = 0,
    coverImages,
    onClick,
    locales: {playlistTag, coursesLabel}
  } = props;
  if (type !== 'playlist') return null;
  const cover = coverImages ? (
    <PlaylistDetailCover className={style.cover} images={coverImages} />
  ) : null;
  const icon = {iconName: 'lines-leaning'};
  return (
    <div className={style.container} data-name={`playlist-card-${label}`} onClick={onClick}>
      <div className={style.imageContainer}>{cover}</div>
      <div className={style.detailWrapper}>
        <div className={style.titleWrapper}>
          <Tag label={playlistTag} size="S" icon={icon} />
          <div className={style.title} data-name="playlist-title">
            {title}
          </div>
          <div
            className={style.courseCount}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{__html: coursesLabel}}
          />
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
  type: PropTypes.oneOf(['playlist']).isRequired,
  label: PropTypes.string,
  title: PropTypes.string.isRequired,
  progress: PropTypes.number,
  coverImages: PlaylistDetailCover.propTypes.images,
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
