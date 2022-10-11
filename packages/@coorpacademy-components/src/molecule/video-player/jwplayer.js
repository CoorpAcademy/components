import React from 'react';
import Player from '@jwplayer/jwplayer-react';
import {get, includes, isFunction, keys} from 'lodash/fp';
import style from './jwplayer.css';
import {JWPlayerPropTypes} from './prop-types';

const fileAndTracks = ({file, customProps, playlist} = {}) => {
  if (file)
    return {
      file,
      tracks: customProps ? customProps.tracks : null
    };
  if (playlist && playlist[0]) return playlist[0];

  return {
    file: null,
    tracks: null
  };
};

class JWPlayer extends React.Component {
  static propTypes = JWPlayerPropTypes;

  constructor(props, context) {
    super(props, context);

    this.state = {
      scriptFailedLoading: false
    };

    this.handlePlay = this.handlePlay.bind(this);
    this.handleResume = this.handleResume.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.handleEnded = this.handleEnded.bind(this);
    this.handleError = this.handleError.bind(this);
    this.handleSetupError = this.handleSetupError.bind(this);
    this.handleScriptError = this.handleScriptError.bind(this);
    this.handlePlayAttemptFailed = this.handlePlayAttemptFailed.bind(this);
    this.handleAutostartNotAllowed = this.handleAutostartNotAllowed.bind(this);
    this.handleWarning = this.handleWarning.bind(this);
  }

  static getDerivedStateFromProps(props) {
    return fileAndTracks(props.jwpOptions);
  }

  componentDidUpdate(prevProps) {
    const changes = keys(this.props).filter(key => {
      const {[key]: current} = this.props;
      const {[key]: prev} = prevProps;
      return current !== prev;
    });
    const shouldStart = includes('autoplay', changes);
    if (shouldStart) {
      if (isFunction(window.jwplayer)) {
        window.jwplayer(prevProps.jwpOptions.playerId).play();
      }
    }
  }

  handlePlay(e) {
    const {onPlay} = this.props;
    if (onPlay) onPlay(e);
  }

  handleResume(e) {
    const {onResume} = this.props;
    if (onResume) onResume(e);
  }

  handlePause(e) {
    const {onPause} = this.props;
    if (onPause) onPause(e);
  }

  handleEnded(e) {
    const {onEnded} = this.props;
    if (onEnded) onEnded(e);
  }

  handleScriptError(script) {
    this.setState({scriptFailedLoading: true});
    if (script) {
      script.parentNode.removeChild();
    }
  }

  handleSetupError(error) {
    const {onSetupError} = this.props;
    if (onSetupError) onSetupError(error);
  }

  handlePlayAttemptFailed(error) {
    const {onPlayAttemptFailed} = this.props;
    if (onPlayAttemptFailed) onPlayAttemptFailed(error);
  }

  handleAutostartNotAllowed(error) {
    const {onAutostartNotAllowed} = this.props;
    if (onAutostartNotAllowed) onAutostartNotAllowed(error);
  }

  handleWarning(error) {
    const {onWarning} = this.props;
    if (onWarning) onWarning(error);
  }

  handleError(error) {
    const {onError, mimeType, jwpOptions} = this.props;
    const {code} = error;

    onError && onError(error);

    if (mimeType === 'application/kontiki') {
      return;
    }

    // This error mostly appears on IE11 on W7
    // Since IE11 dont kinda support M3U8 sometimes,
    // We've decided to switch from M3U8 to mp4 whenever it appears
    if (code === 214000) {
      const {file: videoUrl} = jwpOptions;
      const regex = /^https:\/\/content.jwplatform\.com\/manifests\/(\w+).m3u8/;
      const matched = videoUrl.match(regex);

      if (matched) {
        const videoId = matched[1];
        return this.setState({
          file: `https://content.jwplatform.com/videos/${videoId}-1080.mp4`
        });
      }
    }
  }

  render() {
    const {jwpOptions, disableAutostart, scriptErrorMessage} = this.props;
    const {scriptFailedLoading, file, tracks} = this.state;
    const _jwpOptions = {
      ...jwpOptions,
      customProps: {
        ...get('customProps', jwpOptions),
        key: jwpOptions.licenseKey,
        autostart: !disableAutostart && get('customProps.autostart', jwpOptions)
      }
    };

    return (
      <>
        {scriptFailedLoading ? <p className={style.errorMessage}>{scriptErrorMessage} </p> : null}
        <Player
          key={file}
          className={style.wrapper}
          id={_jwpOptions.playerId}
          file={file}
          tracks={tracks}
          library={_jwpOptions.playerScript}
          config={_jwpOptions.customProps}
          onAutoStart={this.handlePlay}
          onPlay={this.handlePlay}
          onResume={this.handleResume}
          onPause={this.handlePause}
          onOneHundredPercent={this.handleEnded}
          onError={this.handleError}
          onSetupError={this.handleSetupError}
          onPlayAttemptFailed={this.handlePlayAttemptFailed}
          onWarning={this.handleWarning}
          onAutostartNotAllowed={this.handleAutostartNotAllowed}
        />
      </>
    );
  }
}

export default JWPlayer;
