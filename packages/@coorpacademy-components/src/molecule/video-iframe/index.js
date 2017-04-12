import React from 'react';
import PropTypes from 'prop-types';
import * as CustomPropTypes from '../../util/proptypes';
import Picture from '../../atom/picture';
import style from './style.css';

const VIMEO = 'vimeo';
const YOUTUBE = 'youtube';

const getUrl = (type, id) => {
  if (!id) {
    return null;
  }

  switch (type) {
    case VIMEO:
      return `https://player.vimeo.com/video/${id}?color=dedede&badge=0&byline=0&title=0&portrait=0`;
    case YOUTUBE:
      return `https://www.youtube.com/embed/${id}`;
  }
};

const VideoIframe = props => {
  const {
    type,
    id,
    url,
    image,
    width = '100%',
    height = '400px'
  } = props;

  const src = url || getUrl(type, id);

  if (src) {
    return (
      <iframe
        src={src}
        width={width}
        height={height}
        frameBorder={0}
        className={style.iframe}
        allowFullScreen
      />
    );
  }
  else {
    return (
      <Picture
        className={style.image}
        src={image}
      />
    );
  }
};

VideoIframe.propTypes = {
  type: PropTypes.oneOf([VIMEO, YOUTUBE]),
  image: Picture.propTypes.src,
  width: PropTypes.string,
  height: PropTypes.string,
  id: PropTypes.string
};

export default VideoIframe;
