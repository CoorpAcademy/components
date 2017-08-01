import React from 'react';
import PropTypes from 'prop-types';
import VideoIframe from '../video-iframe';
import {SrcPropType} from '../../util/proptypes';
import JWPlayer from './jwplayer';

const VideoPlayer = props => {
  const {mimeType, id, width = '100%', height = '400px'} = props;

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
        />
      );

    case 'video/mp4':
      return <JWPlayer {...props} />;
  }
};

VideoPlayer.propTypes = {
  ...JWPlayer.propTypes,
  mediaUrl: SrcPropType,
  mimeType: PropTypes.oneOf(['application/vimeo', 'video/mp4', 'application/youtube']).isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  id: PropTypes.string
};

export default VideoPlayer;
