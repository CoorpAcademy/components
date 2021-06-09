import React from 'react';
import PropTypes from 'prop-types';
import {SrcPropType} from '../../util/proptypes';
import VideoIframe from '../video-iframe';
import JWPlayer from './jwplayer';
import Vimeo from './vimeo';
import style from './style.css';

class VideoPlayer extends React.Component {
  static propTypes = {
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
      'application/h5p',
      'video/mp4'
    ]).isRequired
  };

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
      id: props.id
    };
  }

  handleOnPlay = e => {
    const {played} = this.state;
    const {onResume, onPlay} = this.props;
    if (played) {
      if (onResume) onResume(e);
    } else if (onPlay) onPlay(e);
    this.setState({
      played: true
    });
  };

  renderPlayer = () => {
    const {mimeType, id, url, onPause, onEnded, width = '100%', height = '343px'} = this.props;
    switch (mimeType) {
      case 'application/vimeo':
        return (
          <Vimeo
            {...this.props}
            key={id}
            width={width}
            height={height}
            video={id}
            className={style.wrapper}
            onPlay={this.handleOnPlay}
          />
        );
      case 'application/youtube':
      case 'application/uptale':
      case 'application/h5p':
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
            {...otherProps}
            disableAutostart={disableAutostart}
            jwpOptions={jwpOptions}
            onPlay={this.handleOnPlay}
            key={id}
          />
        );
      }
    }
  };

  render() {
    const {id} = this.props;
    return (
      <div data-name="video-player" className={style.wrapper} key={id}>
        {this.renderPlayer()}
      </div>
    );
  }
}

export default VideoPlayer;
