import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Pdf from '../pdf';
import VideoPlayer from '../video-player';
import style from './style.css';

const TYPE_IMAGE = 'img';
const TYPE_PDF = 'pdf';
const TYPE_VIDEO = 'video';

const ResourcePlayer = props => {
  const {className: customClassName, resource} = props;
  const {type, url: imgSrc, videoId, ...childProps} = resource;
  const className = classnames(
    style.resourcePlayer,
    {
      [TYPE_IMAGE]: style.image,
      [TYPE_VIDEO]: style.video
    }[type],
    customClassName
  );

  return (
    <div className={className}>
      {
        {
          [TYPE_IMAGE]: <img className={style.img} src={imgSrc} />,
          [TYPE_PDF]: <Pdf {...childProps} />,
          [TYPE_VIDEO]: <VideoPlayer id={videoId} height="100%" width="100%" {...childProps} />
        }[type]
      }
    </div>
  );
};

const isType = name => PropTypes.oneOf([name]);

const videoPropType = PropTypes.shape({
  type: isType(TYPE_VIDEO).isRequired,
  _id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  ...VideoPlayer.propTypes
});

const pdfPropType = PropTypes.shape({
  type: isType(TYPE_PDF).isRequired,
  _id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  mediaUrl: PropTypes.string.isRequired,
  onPlay: PropTypes.func
});

const imgPropType = PropTypes.shape({
  type: isType(TYPE_IMAGE).isRequired,
  url: PropTypes.string.isRequired
});

ResourcePlayer.propType = {
  className: PropTypes.string,
  resource: PropTypes.oneOfType([videoPropType, pdfPropType, imgPropType])
};

export default ResourcePlayer;
