import React from 'react';
import PropTypes from 'prop-types';
import qs from 'qs';
import {noop} from 'lodash/fp';
import Provider from '../../atom/provider';
import {SrcPropType} from '../../util/proptypes';
import style from './style.css';

const getUrl = ({url, type, id, query = {}, opts = {}}) => {
  switch (type) {
    case 'youtube':
      return `https://www.youtube.com/embed/${id}?${qs.stringify({...query, ...opts})}`;
    case 'uptale':
      return `https://my.uptale.io/Experience/Launch?id=${id}`;
    case 'omniPlayer':
      return `https://mms.myomni.live/${id}`;
    case 'jwplayer':
      return `https://content.jwplatform.com/players/${id}-7IMa4DCK.html`;
    default:
      return url;
  }
};

class VideoIframe extends React.Component {
  static propTypes = {
    type: PropTypes.oneOf(['youtube', 'uptale', 'kontiki', 'jwplayer', 'omniPlayer']),
    width: PropTypes.string,
    height: PropTypes.string,
    url: SrcPropType,
    id: PropTypes.string,
    autoplay: PropTypes.bool,
    onPlay: PropTypes.func
  };

  static contextTypes = {
    Vimeo: Provider.childContextTypes.Vimeo
  };

  componentDidMount() {
    const {type} = this.props;
    if (type === 'kontiki') {
      const {onPlay = noop} = this.props;
      onPlay();
    }
  }

  render() {
    const {type, id, url, autoplay = false, width = '100%', height = '400px'} = this.props;
    const src = getUrl({url, type, id, autoplay});

    return (
      <iframe
        src={src}
        width={width}
        height={height}
        frameBorder={0}
        className={style.iframe}
        allowvr={type === 'uptale' ? 'yes' : null}
        scrolling={type === 'uptale' ? 'no' : null}
        allowFullScreen
      />
    );
  }
}

export default VideoIframe;
