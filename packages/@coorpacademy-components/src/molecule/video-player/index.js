import React from 'react';
import PropTypes from 'prop-types';
import isEqual from 'lodash/fp/isEqual';
import {SrcPropType} from '../../util/proptypes';
import VideoIframe from '../video-iframe';
import JWPlayer from './jwplayer';
import Vimeo from './vimeo';
import style from './style.css';

class VideoPlayer extends React.Component {
  state = {
    played: false
  };

  componentWillReceiveProps(nextProps) {
    if (!isEqual(nextProps.id, this.props.id)) this.setState(() => ({played: false}));
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
      case 'video/mp4':
        return <JWPlayer {...this.props} onPlay={this.handleOnPlay} key={id} />;
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
  jwpOptions: JWPlayer.propTypes.jwpOptions,
  mimeType: PropTypes.oneOf([
    'application/kontiki',
    'application/uptale',
    'application/vimeo',
    'application/youtube',
    'application/jwplayer',
    'video/mp4'
  ]).isRequired
};

export default VideoPlayer;
