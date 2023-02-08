import React from 'react';
import {get} from 'lodash/fp';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {NovaCompositionCoorpacademyMicrophone as PodcastIcon} from '@coorpacademy/nova-icons';
import Provider from '../../atom/provider';
import style from './style.css';

class Audio extends React.Component {
  static propTypes = {
    description: PropTypes.string,
    mediaUrl: PropTypes.string,
    poster: PropTypes.string,
    onPlay: PropTypes.func
  };

  static contextTypes = {
    skin: Provider.childContextTypes.skin
  };

  constructor(props, context) {
    super(props, context);
    this.handlePlay = this.handlePlay.bind(this);
    this.audioElement = null;
    this.setAudio = this.setAudio.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    const {mediaUrl} = this.props;
    return nextProps.mediaUrl !== mediaUrl;
  }

  componentDidUpdate() {
    this.audioElement.load();
  }

  setAudio = element => {
    this.audioElement = element;
  };

  handlePlay(e) {
    const {onPlay} = this.props;
    if (onPlay) onPlay(e);
  }

  render() {
    const {description, mediaUrl, poster} = this.props;
    const {skin} = this.context;

    const white = get('common.white', skin);
    return (
      <div className={style.frame} style={{backgroundImage: `url(${poster})`}}>
        <PodcastIcon style={{color: white}} className={style.icon} />
        {description ? (
          <div
            className={classnames(style.description, style.innerHTML)}
            data-name="audioDescription"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{__html: description}}
          />
        ) : null}
        <audio
          className={style.audio}
          controls
          controlsList="nodownload"
          ref={this.setAudio}
          autoPlay=""
          onPlay={this.handlePlay}
          name="media"
          data-name="audio"
          preload="auto"
        >
          <source src={mediaUrl} />
        </audio>
      </div>
    );
  }
}

export default Audio;
