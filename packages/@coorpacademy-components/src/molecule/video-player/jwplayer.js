import React from 'react';
import PropTypes from 'prop-types';
import ReactJWPlayer from '@coorpacademy/react-jw-player';
import {SrcPropType} from '../../util/proptypes';

class JWPlayer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.handleEnded = this.handleEnded.bind(this);
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
    return (
      <div>
        <ReactJWPlayer
          onPlay={this.handlePlay}
          onPause={this.handlePause}
          onOneHundredPercent={this.handleEnded}
          {...this.props.jwpOptions}
        />
      </div>
    );
  }
}

JWPlayer.propTypes = {
  jwpOptions: PropTypes.shape({
    file: SrcPropType,
    customProps: PropTypes.shape({
      aspectratio: PropTypes.string,
      width: PropTypes.string,
      skin: PropTypes.shape({
        name: PropTypes.string
      })
    }),
    licenseKey: PropTypes.string.isRequired,
    playerScript: SrcPropType.isRequired
  }),
  onPlay: PropTypes.func,
  onPause: PropTypes.func,
  onEnded: PropTypes.func
};

export default JWPlayer;
