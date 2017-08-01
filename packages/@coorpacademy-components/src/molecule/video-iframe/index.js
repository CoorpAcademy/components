import React from 'react';
import PropTypes from 'prop-types';
import qs from 'qs';
import Picture from '../../atom/picture';
import style from './style.css';

const PROVIDERS = {
  vimeo: {
    url: 'https://player.vimeo.com/video',
    query: {
      color: 'dedede',
      badge: 0,
      byline: 0,
      title: 0,
      portrait: 0
    }
  },
  youtube: {
    url: 'https://www.youtube.com/embed'
  },
  jwplayer: {
    url: 'https://www.youtube.com/embed'
  }
};

const formatUrl = ({id, url, query = {}, opts = {}}) =>
  `${url}/${id}?${qs.stringify({...query, ...opts})}`;

const getUrl = ({type, id, ...opts}) =>
  id && PROVIDERS[type] ? formatUrl({id, ...PROVIDERS[type], opts}) : null;

const VideoIframe = props => {
  const {type, id, url, image, autoplay = false, width = '100%', height = '400px'} = props;

  const src = url || getUrl({type, id, autoplay});

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
  } else {
    return <Picture className={style.image} src={image} />;
  }
};

VideoIframe.propTypes = {
  type: PropTypes.oneOf(Object.keys(PROVIDERS)),
  image: Picture.propTypes.src,
  width: PropTypes.string,
  height: PropTypes.string,
  id: PropTypes.string,
  autoplay: PropTypes.bool
};

export default VideoIframe;
