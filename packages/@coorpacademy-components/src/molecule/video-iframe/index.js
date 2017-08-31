import React from 'react';
import PropTypes from 'prop-types';
import qs from 'qs';
import noop from 'lodash/fp/noop';
import Provider from '../../atom/provider';
import {SrcPropType} from '../../util/proptypes';
import style from './style.css';

const PROVIDERS = {
  youtube: {
    url: 'https://www.youtube.com/embed'
  },
  kontiki: {}
};

const formatUrl = ({id, url, query = {}, opts = {}}) =>
  `${url}/${id}?${qs.stringify({...query, ...opts})}`;

const getUrl = ({type, id, ...opts}) =>
  id && PROVIDERS[type] ? formatUrl({id, ...PROVIDERS[type], opts}) : null;

class VideoIframe extends React.Component {
  componentDidMount() {
    const {type} = this.props;
    if (type === 'kontiki') {
      const {onPlay = noop} = this.props;
      onPlay();
    }
  }

  render() {
    const {type, id, url, autoplay = false, width = '100%', height = '400px'} = this.props;
    const src = url || getUrl({type, id, autoplay});

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
}

VideoIframe.contextTypes = {
  Vimeo: Provider.childContextTypes.Vimeo
};

VideoIframe.propTypes = {
  type: PropTypes.oneOf(Object.keys(PROVIDERS)),
  width: PropTypes.string,
  height: PropTypes.string,
  url: SrcPropType,
  id: PropTypes.string,
  autoplay: PropTypes.bool,
  onPlay: PropTypes.func
};

export default VideoIframe;
