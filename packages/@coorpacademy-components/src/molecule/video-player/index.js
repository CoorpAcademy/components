import React from 'react';
import PropTypes from 'prop-types';
import VideoIframe from '../video-iframe';
import JWPlayer from './jwplayer';

const VideoPlayer = props => {
  const {mimeType, id, width = '100%', height = '400px', onPlay, onPause, onEnded} = props;

  switch (mimeType) {
    case 'application/vimeo':
    case 'application/youtube':
      return (
        <VideoIframe
          type={mimeType.split('application/')[1]}
          id={id}
          width={width}
          height={height}
          frameBorder={0}
          allowFullScreen
          onPlay={onPlay}
          onPause={onPause}
          onEnded={onEnded}
        />
      );

    case 'video/mp4':
      return <JWPlayer {...props} />;
  }
};

VideoPlayer.propTypes = {
  mimeType: PropTypes.oneOf(['application/vimeo', 'video/mp4', 'application/youtube']).isRequired
};

export default VideoPlayer;
