import React, {PropTypes} from 'react';
import * as CustomPropTypes from '../../util/proptypes';
import Picture from '../../atom/picture';
import style from './style.css';

const VIMEO = 'vimeo';
const YOUTUBE = 'youtube';

const url = (type, id) => {
  switch (type) {
    case VIMEO:
      return `https://player.vimeo.com/video/${id}?color=dedede&badge=0&byline=0&title=0&portrait=0`;
    case YOUTUBE:
      return `https://www.youtube.com/embed/${id}`;
  }
};

const VideoIframe = ({children, ...props}) => {
  const {
    type,
    id,
    image,
    width = '100%',
    height = '400px'
  } = props;

  if (id) {
    return (
      <iframe src={url(type, id)}
            width={width}
            height={height}
            frameborder={0}
            className={style.iframe}
            allowfullscreen={true}
      >
      </iframe>
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
  image: PropTypes.shape({
    '1x': CustomPropTypes.url,
    '2x': CustomPropTypes.url
  }),
  width: PropTypes.string,
  height: PropTypes.string,
  id: PropTypes.string
};

export default VideoIframe;
