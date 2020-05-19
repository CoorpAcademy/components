import React from 'react';
import PropTypes from 'prop-types';
import {SrcPropType} from '../../util/proptypes';
import VideoIframe from '../video-iframe';
import JWPlayer from './jwplayer';
import Vimeo from './vimeo';
import style from './style.css';

class VideoPlayer extends React.Component {
  static getDerivedStateFromProps(props, state) {
    if (props.id === state.id) return null;

    return {
      id: props.id,
      played: false
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      played: false,
      // eslint-disable-next-line react/no-unused-state
      id: props.id
    };
  }

  handleOnPlay = e => {
    if (this.state.played) {
      this.props.onResume && this.props.onResume(e);
    } else {
      this.props.onPlay && this.props.onPlay(e);
    }
    this.setState({
      played: true
    });
  };

  renderPlayer = () => {
    const {mimeType, id, url, width = '100%', height = '400px', onPause, onEnded} = this.props;
    switch (mimeType) {
      case 'application/vimeo':
        return (
          <Vimeo
            key={id}
            {...this.props}
            width={width}
            height={height}
            video={id}
            className={style.wrapper}
            onPlay={this.handleOnPlay}
          />
        );

      case 'application/youtube':
      case 'application/uptale':
      case 'application/omniPlayer':
        return (
          <VideoIframe
            key={id}
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
      case 'application/kontiki':
      case 'application/jwplayer':
      case 'video/mp4': {
        const {disableAutostart, jwpOptions, ...otherProps} = this.props;

        return (
          <JWPlayer
            disableAutostart={disableAutostart}
            jwpOptions={jwpOptions}
            {...otherProps}
            onPlay={this.handleOnPlay}
            key={id}
          />
        );
      }
    }
  };

  render() {
    return (
      <div data-name="video-player" className={style.wrapper} key={this.props.id}>
        {this.renderPlayer()}
      </div>
    );
  }
}

VideoPlayer.propTypes = {
  id: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  url: SrcPropType,
  onPlay: PropTypes.func,
  onResume: PropTypes.func,
  onPause: PropTypes.func,
  onEnded: PropTypes.func,
  onError: PropTypes.func,
  autoplay: PropTypes.bool,
  disableAutostart: PropTypes.bool,
  jwpOptions: JWPlayer.propTypes.jwpOptions,
  mimeType: PropTypes.oneOf([
    'application/kontiki',
    'application/uptale',
    'application/vimeo',
    'application/youtube',
    'application/jwplayer',
    'application/omniPlayer',
    'video/mp4'
  ]).isRequired
};

export default VideoPlayer;
