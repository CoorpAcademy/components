import React from 'react';
import PropTypes from 'prop-types';
import ReactJWPlayer from 'react-jw-player';
import includes from 'lodash/fp/includes';
import keys from 'lodash/fp/keys';
import {SrcPropType} from '../../util/proptypes';
import style from './jwplayer.css';

class JWPlayer extends React.Component {
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
    const changes = keys(this.props).filter(_name => this.props[_name] !== prevProps[_name]);
    const shouldStart = includes('autoplay', changes);
    if (shouldStart) {
      if (window.jwplayer) {
        window.jwplayer().play();
      }
    }
    if (prevProps.jwpOptions.file !== this.props.jwpOptions.file) {
      this.setFileUrl();
    }
  }

  setFileUrl() {
    const {file} = this.props.jwpOptions;

    return this.setState({fileUrl: file});
  }

  handlePlay(e) {
    this.props.onPlay && this.props.onPlay(e);
  }

  handleResume(e) {
    this.props.onResume && this.props.onResume(e);
  }

  handlePause(e) {
    this.props.onPause && this.props.onPause(e);
  }

  handleEnded(e) {
    this.props.onEnded && this.props.onEnded(e);
  }

  handleScriptError(script) {
    this.setState({scriptFailedLoading: true});
    if (script) {
      script.parentNode.removeChild(script);
    }
  }

  handleSetupError(error) {
    this.props.onSetupError && this.props.onSetupError(error);
  }

  handlePlayAttemptFailed(error) {
    this.props.onPlayAttemptFailed && this.props.onPlayAttemptFailed(error);
  }

  handleAutostartNotAllowed(error) {
    this.props.onAutostartNotAllowed && this.props.onAutostartNotAllowed(error);
  }

  handleWarning(error) {
    this.props.onWarning && this.props.onWarning(error);
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
    return (
      <>
        {this.state.scriptFailedLoading && (
          <p className={style.errorMessage}>{this.props.scriptErrorMessage}</p>
        )}
        <ReactJWPlayer
          {...this.props.jwpOptions}
          className={style.wrapper}
          onPlay={this.handlePlay}
          onResume={this.handleResume}
          onPause={this.handlePause}
          onOneHundredPercent={this.handleEnded}
          onError={this.handleError}
          onSetupError={this.handleSetupError}
          onPlayAttemptFailed={this.handlePlayAttemptFailed}
          onWarning={this.handleWarning}
          onAutostartNotAllowed={this.handleAutostartNotAllowed}
          file={this.state.fileUrl}
        />
      </>
    );
  }
}

JWPlayer.propTypes = {
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
  onSetupError: PropTypes.func
};

export default JWPlayer;
