import React from 'react';
import PropTypes from 'prop-types';
import ReactJWPlayer from 'react-jw-player';
import {get, includes, isFunction, keys} from 'lodash/fp';
import {SrcPropType} from '../../util/proptypes';
import style from './jwplayer.css';

class JWPlayer extends React.Component {
  static propTypes = {
    mimeType: PropTypes.string,
    scriptErrorMessage: PropTypes.string,
    disableAutostart: PropTypes.bool,
    // https://developer.jwplayer.com/jwplayer/docs/jw8-player-configuration-reference
    jwpOptions: PropTypes.shape({
      file: SrcPropType,
      customProps: PropTypes.shape({
        aspectratio: PropTypes.string,
        tracks: PropTypes.arrayOf(
          PropTypes.shape({
            file: SrcPropType,
            label: PropTypes.string,
            kind: PropTypes.string,
            default: PropTypes.boolean
          })
        ),
        autostart: PropTypes.oneOf(['true', 'viewable', 'false']),
        width: PropTypes.string,
        skin: PropTypes.shape({
          name: PropTypes.string
        })
      }),
      licenseKey: PropTypes.string.isRequired,
      playerScript: SrcPropType.isRequired
    }),
    onPlay: PropTypes.func,
    onResume: PropTypes.func,
    onPause: PropTypes.func,
    onEnded: PropTypes.func,
    onError: PropTypes.func,
    onPlayAttemptFailed: PropTypes.func,
    onAutostartNotAllowed: PropTypes.func,
    onSetupError: PropTypes.func,
    onWarning: PropTypes.func
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      fileUrl: '',
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

  componentDidMount() {
    const jwPlayerScript = document.getElementById('jw-player-script');
    jwPlayerScript.onerror = () => this.handleScriptError(jwPlayerScript);
    this.setFileUrl();
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
        window.jwplayer().play();
      }
    }
    const {jwpOptions} = this.props;
    if (prevProps.jwpOptions.file !== jwpOptions.file) {
      this.setFileUrl();
    }
  }

  setFileUrl() {
    const {jwpOptions} = this.props;
    const {file} = jwpOptions;

    return this.setState({fileUrl: file});
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
          fileUrl: `https://content.jwplatform.com/videos/${videoId}-1080.mp4`
        });
      }
    }
  }

  render() {
    const {jwpOptions, disableAutostart, scriptErrorMessage} = this.props;
    const {scriptFailedLoading, fileUrl} = this.state;
    const _jwpOptions = {
      ...jwpOptions,
      customProps: {
        ...get('customProps', jwpOptions),
        autostart: !disableAutostart && get('customProps.autostart', jwpOptions)
      }
    };

    return (
      <>
        {scriptFailedLoading ? <p className={style.errorMessage}>{scriptErrorMessage} </p> : null}
        <ReactJWPlayer
          {..._jwpOptions}
          className={style.wrapper}
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
          file={fileUrl}
        />
      </>
    );
  }
}

export default JWPlayer;
