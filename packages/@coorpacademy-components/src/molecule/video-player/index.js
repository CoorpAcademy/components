import React from 'react';
import PropTypes from 'prop-types';
import VideoIframe from '../video-iframe';
import JWPlayer from './jwplayer';
import Vimeo from './vimeo';
import style from './style.css';

class Player extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      played: false
    };
    this.handleOnPlay = this.handleOnPlay.bind(this);
  }

  handleOnPlay(e) {
    if (this.state.played) {
      this.props.onResume && this.props.onResume(e);
    } else {
      this.props.onPlay && this.props.onPlay(e);
    }
    this.setState({
      played: true
    });
  }

  render() {
    const {mimeType, id, url, width = '100%', height = '400px', onPause, onEnded} = this.props;
    switch (mimeType) {
      case 'application/vimeo':
        return (
          <Vimeo {...this.props} video={id} className={style.wrapper} onPlay={this.handleOnPlay} />
        );

      case 'application/youtube':
      case 'application/kontiki':
        return (
          <VideoIframe
            type={mimeType.split('application/')[1]}
            id={id}
            url={url}
            width={width}
            height={height}
            frameBorder={0}
            allowFullScreen
            onPlay={this.handleOnPlay}
            onPause={onPause}
            onEnded={onEnded}
          />
        );

      case 'video/mp4':
        return <JWPlayer {...this.props} />;
    }
  }
}

const VideoPlayer = props =>
  <div className={style.wrapper}>
    <Player {...props} />
  </div>;

VideoPlayer.propTypes = {
  id: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  onPlay: PropTypes.func,
  onResume: PropTypes.func,
  onPause: PropTypes.func,
  onEnded: PropTypes.func,
  mimeType: PropTypes.oneOf([
    'application/kontiki',
    'application/vimeo',
    'application/youtube',
    'video/mp4'
  ]).isRequired
};

export default VideoPlayer;
