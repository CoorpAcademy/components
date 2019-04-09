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
    this.handlePlay = this.handlePlay.bind(this);
    this.handleResume = this.handleResume.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.handleEnded = this.handleEnded.bind(this);
  }

  componentDidUpdate(prevProps) {
    const changes = keys(this.props).filter(_name => this.props[_name] !== prevProps[_name]);
    const shouldStart = includes('autoplay', changes);
    if (shouldStart) {
      if (window.jwplayer) {
        window.jwplayer().play();
      }
    }
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

  render() {
    return (
      <ReactJWPlayer
        className={style.wrapper}
        onPlay={this.handlePlay}
        onResume={this.handleResume}
        onPause={this.handlePause}
        onOneHundredPercent={this.handleEnded}
        {...this.props.jwpOptions}
      />
    );
  }
}

JWPlayer.propTypes = {
  jwpOptions: PropTypes.shape({
    file: SrcPropType,
    customProps: PropTypes.shape({
      aspectratio: PropTypes.string,
      tracks: PropTypes.shape({
        file: SrcPropType,
        label: PropTypes.string,
        kind: PropTypes.string,
        default: PropTypes.string
      }),
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
  onEnded: PropTypes.func
};

export default JWPlayer;
