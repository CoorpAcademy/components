import React from 'react';
import PropTypes from 'prop-types';
import Pdf from '../pdf';
import VideoPlayer from '../video-player';

const ResourcePlayer = props => {
  const {type, videoId, ...childProps} = props;

  switch (type) {
    case 'img':
      return <img src={props.url} />;
    case 'pdf':
      return <Pdf {...childProps} />;
    case 'video':
      return <VideoPlayer id={videoId} height="100%" width="100%" {...childProps} />;
    default:
      return null;
  }
};

const resourceType = PropTypes.oneOf(['img', 'pdf', 'video']);

const videoPropType = PropTypes.shape({
  type: resourceType,
  _id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  ...VideoPlayer.propTypes
});

const pdfPropType = PropTypes.shape({
  type: resourceType,
  _id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  mediaUrl: PropTypes.string.isRequired,
  onPlay: PropTypes.func
});

const imgPropType = PropTypes.shape({
  type: resourceType,
  url: PropTypes.string.isRequired
});

ResourcePlayer.propType = PropTypes.oneOfType([videoPropType, pdfPropType, imgPropType]);

export default ResourcePlayer;
