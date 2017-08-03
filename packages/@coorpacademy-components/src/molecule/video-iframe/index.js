import React from 'react';
import PropTypes from 'prop-types';
import qs from 'qs';
import get from 'lodash/fp/get';
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
  }
};

const formatUrl = ({id, url, query = {}, opts = {}}) =>
  `${url}/${id}?${qs.stringify({...query, ...opts})}`;

const getUrl = ({type, id, ...opts}) =>
  id && PROVIDERS[type] ? formatUrl({id, ...PROVIDERS[type], opts}) : null;

class VideoIframe extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.setRefIframe = this.setRefIframe.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.handleEnded = this.handleEnded.bind(this);
  }

  componentDidMount() {
    if (this.props.type === 'vimeo') {
      if (!window.Vimeo) {
        // eslint-disable-next-line no-console
        console.warn('Vimeo player not found, events are unplugged.');
        return;
      }

      this.player = new window.Vimeo.Player(this.iframe);

      this.player.on('play', this.handlePlay);
      this.player.on('pause', this.handlePause);
      this.player.on('ended', this.handleEnded);
    }
  }

  componentWillUnmount() {
    if (get('player.off', this)) {
      this.player.off('play', this.handlePlay);
      this.player.off('pause', this.handlePause);
      this.player.off('ended', this.handleEnded);
    }
  }

  setRefIframe(iframe) {
    this.iframe = iframe;
  }

  handlePlay(e) {
    this.props.onPlay && this.props.onPlay(e);
  }

  handlePause(e) {
    this.props.onPause && this.props.onPause(e);
  }

  handleEnded(e) {
    this.props.onEnded && this.props.onEnded(e);
  }

  render() {
    const {type, id, url, image, autoplay = false, width = '100%', height = '400px'} = this.props;
    const src = url || getUrl({type, id, autoplay});

    if (src) {
      return (
        <iframe
          ref={this.setRefIframe}
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
  }
}

VideoIframe.propTypes = {
  type: PropTypes.oneOf(Object.keys(PROVIDERS)),
  image: Picture.propTypes.src,
  width: PropTypes.string,
  height: PropTypes.string,
  id: PropTypes.string,
  autoplay: PropTypes.bool,
  onPlay: PropTypes.func,
  onPause: PropTypes.func,
  onEnded: PropTypes.func
};

export default VideoIframe;
