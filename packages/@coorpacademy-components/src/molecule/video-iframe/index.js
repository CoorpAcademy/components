import React from 'react';
import PropTypes from 'prop-types';
import qs from 'qs';
import {noop, includes} from 'lodash/fp';
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
    type: PropTypes.oneOf([
      'youtube',
      'uptale',
      'kontiki',
      'jwplayer',
      'omniPlayer',
      'h5p',
      'faurecia-vr'
    ]),
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
    const properties = {
      allow: includes(type, ['faurecia-vr']) ? 'xr-spatial-tracking;fullscreen' : null,
      allowFullScreen: true,
      allowvr: includes(type, ['uptale', 'faurecia-vr']) ? 'yes' : null,
      scrolling: includes(type, ['uptale', 'faurecia-vr']) ? 'no' : null,
      frameBorder: '0'
    };
    return (
      <iframe {...properties} src={src} width={width} height={height} className={style.iframe} />
    );
  }
}

export default VideoIframe;
