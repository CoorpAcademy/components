/*
  from https://github.com/u-wave/react-vimeo
  adapted to use Vimeo.js from context and support width: 100%
*/
import React from 'react';
import PropTypes from 'prop-types';
import {keys} from 'lodash/fp';
import Provider from '../../atom/provider';
import Loader from '../../atom/loader';

const eventNames = {
  ready: 'onReady',
  play: 'onPlay',
  pause: 'onPause',
  ended: 'onEnded',
  timeupdate: 'onTimeUpdate',
  progress: 'onProgress',
  seeked: 'onSeeked',
  texttrackchange: 'onTextTrackChange',
  cuechange: 'onCueChange',
  cuepoint: 'onCuePoint',
  volumechange: 'onVolumeChange',
  error: 'onError',
  loaded: 'onLoaded'
};

class Vimeo extends React.Component {
  static propTypes = {
    /**
     * A Vimeo ID or URL.
     */
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /**
     * CSS className for the player element.
     */
    className: PropTypes.string,
    /**
     * Width of the player element.
     */
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /**
     * Height of the player element.
     */
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /**
     * Pause the video.
     */
    paused: PropTypes.bool,

    // Player parameters
    /**
     * Pause this video automatically when another one plays.
     */
    autopause: PropTypes.bool,

    /**
     * Automatically start playback of the video. Note that this won’t work on
     * some devices.
     */
    autoplay: PropTypes.bool,

    /**
     * Show the byline on the video.
     */
    showByline: PropTypes.bool,

    /**
     * Specify the color of the video controls. Colors may be overridden by the
     * embed settings of the video.
     */
    color: PropTypes.string,

    /**
     * Play the video again when it reaches the end.
     */
    loop: PropTypes.bool,

    /**
     * Show the portrait on the video.
     */
    showPortrait: PropTypes.bool,

    /**
     * Show the title on the video.
     */
    showTitle: PropTypes.bool,

    // Events

    /**
     * Sent when the Vimeo player API has loaded.
     */
    onReady: PropTypes.func,
    /**
     * Sent when the player triggers an error.
     */
    onError: PropTypes.func,
    /**
     * Triggered when the video plays.
     */
    onPlay: PropTypes.func,
    /**
     * Triggered when the video pauses.
     */
    onPause: PropTypes.func,
    /**
     * Triggered any time the video playback reaches the end.
     * Note: when `loop` is turned on, the ended event will not fire.
     */
    onEnd: PropTypes.func,
    /**
     * Triggered as the `currentTime` of the video updates. It generally fires
     * every 250ms, but it may vary depending on the browser.
     */
    onTimeUpdate: PropTypes.func,
    /**
     * Triggered as the video is loaded. Reports back the amount of the video
     * that has been buffered.
     */
    onProgress: PropTypes.func,
    /**
     * Triggered when the player seeks to a specific time. An `onTimeUpdate`
     * event will also be fired at the same time.
     */
    onSeeked: PropTypes.func,
    /**
     * Triggered when the active text track (captions/subtitles) changes. The
     * values will be `null` if text tracks are turned off.
     */
    onTextTrackChange: PropTypes.func,
    /**
     * Triggered when the active cue for the current text track changes. It also
     * fires when the active text track changes. There may be multiple cues
     * active.
     */
    onCueChange: PropTypes.func,
    /**
     * Triggered when the current time hits a registered cue point.
     */
    onCuePoint: PropTypes.func,
    /**
     * Triggered when the volume in the player changes. Some devices do not
     * support setting the volume of the video independently from the system
     * volume, so this event will never fire on those devices.
     */
    onVolumeChange: PropTypes.func,
    /**
     * Triggered when a new video is loaded in the player.
     */
    onLoaded: PropTypes.func
  };

  static contextTypes = {
    Vimeo: Provider.childContextTypes.Vimeo
  };

  static defaultProps = {
    autopause: true,
    autoplay: false,
    loop: false,
    showByline: true,
    showPortrait: true,
    showTitle: true
  };

  constructor(props, context) {
    super(props, context);
    this.refContainer = this.refContainer.bind(this);
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    this.createPlayer();
  }

  componentDidUpdate(prevProps) {
    const changes = keys(this.props).filter(key => {
      const {[key]: current} = this.props;
      const {[key]: prev} = prevProps;
      return current !== prev;
    });
    this.updateProps(changes);
  }

  getInitialOptions() {
    const {
      id,
      width,
      height,
      autopause,
      autoplay,
      showByline,
      color,
      loop,
      showPortrait,
      showTitle
    } = this.props;
    return {
      id,
      width,
      height,
      autopause,
      autoplay,
      byline: showByline,
      color,
      loop,
      portrait: showPortrait,
      title: showTitle
    };
  }

  updateProps(propNames) {
    const player = this.player;
    propNames.forEach(key => {
      const {[key]: value} = this.props;
      switch (key) {
        case 'width':
        case 'height':
          player.element[key] = value;
          break;
        case 'id':
          if (value) {
            player.loadVideo(value);
          } else {
            player.unload();
          }
          break;
        case 'autoplay':
          player.play();
          break;
      }
    });
  }

  createPlayer() {
    const options = this.getInitialOptions();
    const {Vimeo: V} = this.context;
    if (!V) return null;

    const {Player} = V;
    this.player = new Player(this.container, {
      ...options,
      width: '1',
      height: '1'
    });
    this.player.on('loaded', () => {
      this.updateProps(['width', 'height']);
      this.setState(state => ({
        isLoading: false
      }));
    });

    keys(eventNames).forEach(dmName => {
      const {[dmName]: reactName} = eventNames;
      this.player.on(dmName, e => {
        const {[reactName]: handler} = this.props;
        if (handler) {
          handler(e);
        }
      });
    });
  }

  refContainer(container) {
    this.container = container;
  }

  render() {
    const {className, height, width} = this.props;
    const {isLoading} = this.state;
    return (
      <div className={className} ref={this.refContainer} style={{height, width}}>
        {isLoading ? <Loader /> : null}
      </div>
    );
  }
}

export default Vimeo;
