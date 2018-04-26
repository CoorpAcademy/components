import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import omit from 'lodash/fp/omit';
import Pdf from '../pdf';
import VideoPlayer from '../video-player';
import Life from '../../atom/life';
import style from './style.css';

export const TYPE_IMAGE = 'img';
export const TYPE_PDF = 'pdf';
export const TYPE_VIDEO = 'video';

const ResourceElement = props => {
  const {resource} = props;
  const {type, videoId, ...childProps} = omit('id', resource);
  const {url} = childProps;

  switch (type) {
    case TYPE_IMAGE:
      return <div className={style.img} style={{backgroundImage: `url(${url})`}} />;
    case TYPE_PDF:
      return <Pdf {...childProps} />;
    case TYPE_VIDEO:
      return <VideoPlayer id={videoId} height="100%" width="100%" {...childProps} />;
  }
};

const ResourcePlayer = props => {
  const {className: customClassName, resource, isRevival} = props;
  const {type} = resource;
  const className = classnames(
    style.resourcePlayer,
    {
      [TYPE_IMAGE]: style.image,
      [TYPE_VIDEO]: style.video
    }[type],
    customClassName
  );
  const gainJoker = isRevival ? (
    <div className={style.jokerOverlay}>
      <div className={style.jokerOverlayIllus}>
        <Life count="1" addLife="true"/>
      </div>
      <p>Bonus !</p>
      <div><p>Récupérez une vie en regardant la leçon !</p></div>
    </div>
  ) : null;

  return (
    <div className={className}>
      {gainJoker}
      <ResourceElement {...props} />
    </div>
  );
};

const isType = name => PropTypes.oneOf([name]);

const videoPropType = PropTypes.shape({
  type: isType(TYPE_VIDEO).isRequired,
  description: PropTypes.string.isRequired,
  ...VideoPlayer.propTypes
});

const pdfPropType = PropTypes.shape({
  type: isType(TYPE_PDF).isRequired,
  description: PropTypes.string.isRequired,
  mediaUrl: PropTypes.string.isRequired,
  ...Pdf.propTypes
});

const imgPropType = PropTypes.shape({
  type: isType(TYPE_IMAGE).isRequired,
  url: PropTypes.string.isRequired
});

ResourcePlayer.propType = {
  className: PropTypes.string,
  resource: PropTypes.oneOfType([videoPropType, pdfPropType, imgPropType]),
  isRevival: PropTypes.bool
};

export default ResourcePlayer;
