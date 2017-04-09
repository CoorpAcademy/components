import React from 'react';
import PropTypes from 'prop-types';
import VideoIframe from '../video-iframe';
import Picture from '../../atom/picture';
import style from './style.css';

const VideoPlayer = props => {
  const {
    type,
    id,
    image,
    playVideo,
    width = '100%',
    height = '400px'
  } = props;

  return (
    <div className={style.list}>
      <div className={style.item}>
        <input
          type='checkbox'
          id='toggler'
          checked={false}
          className={style.checkbox}
        />
        <label
          htmlFor={'toggler'}
          className={style.togglerDisplay}
          onClick={playVideo}
        >
          <Picture
            src={image}
            className={style.image}
            width={width}
            height={height}
          />
        </label>
        <VideoIframe
          type={type}
          id={id}
          width={width}
          height={height}
          frameBorder={0}
          className={style.iframe}
          allowFullScreen
        />
      </div>
    </div>
  );
};

VideoPlayer.propTypes = {
  type: PropTypes.oneOf(['vimeo', 'youtube']).isRequired,
  playVideo: PropTypes.func,
  image: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  id: PropTypes.string
};

export default VideoPlayer;
