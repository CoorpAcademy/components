/*
  from https://github.com/u-wave/react-vimeo
  adapted to use Vimeo.js from context and support width: 100%
*/
import React from 'react';
import PropTypes from 'prop-types';
import Provider from '../../atom/provider';

const eventNames = {
  ready: 'onReady',
  play: 'onPlay',
  pause: 'onPause',
  ended: 'onEnd',
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
  constructor(props, context) {
    super(props, context);
    this.refContainer = this.refContainer.bind(this);
  }

  componentDidMount() {
    this.createPlayer();
    setTimeout(() => {
      this.updateProps(['width', 'height']);
    }, 200);
  }

  componentDidUpdate(prevProps) {
    const changes = Object.keys(this.props).filter(_name => this.props[_name] !== prevProps[_name]);
    this.updateProps(changes);
  }

  getInitialOptions() {
    return {
      id: this.props.video,
      width: this.props.width,
      height: this.props.height,
      autopause: this.props.autopause,
      autoplay: this.props.autoplay,
      byline: this.props.showByline,
      color: this.props.color,
      loop: this.props.loop,
      portrait: this.props.showPortrait,
      title: this.props.showTitle
    };
  }

  updateProps(propNames) {
    const player = this.player;
    propNames.forEach(_name => {
      const value = this.props[_name];
      switch (_name) {
        case 'autopause':
          player.setAutopause(value);
          break;
        case 'color':
          player.setColor(value);
          break;
        case 'loop':
          player.setLoop(value);
          break;
        case 'volume':
          player.setVolume(value);
          break;
        case 'paused':
          player
            .getPaused()
            .then(paused => {
              if (value && !paused) {
                return player.pause();
              } else if (!value && paused) {
                return player.play();
              }
              return null;
            })
            .catch(e => {
              return null;
            });
          break;
        case 'width':
        case 'height':
          this.player.element[_name] = value; // eslint-disable-line no-param-reassign
          break;
        case 'video':
          if (value) {
            player.loadVideo(value);
          } else {
            player.unload();
          }
          break;
        default:
        // Nothing
      }
    });
  }

  createPlayer() {
    const options = this.getInitialOptions();
    const {Vimeo: V} = this.context;
    const {Player} = V;
    this.player = new Player(this.container, options);

    Object.keys(eventNames).forEach(dmName => {
      const reactName = eventNames[dmName];
      this.player.on(dmName, e => {
        if (this.props[reactName]) {
          this.props[reactName](e);
        }
      });
    });

    if (typeof this.props.volume === 'number') {
      this.updateProps(['volume']);
    }
  }

  refContainer(container) {
    this.container = container;
  }

  render() {
    return <div id={this.props.id} className={this.props.className} ref={this.refContainer} />;
  }
}

Vimeo.contextTypes = {
  Vimeo: Provider.childContextTypes.Vimeo
};

Vimeo.defaultProps = {
  autopause: true,
  autoplay: false,
  showByline: true,
  loop: false,
  showPortrait: true,
  showTitle: true
};

Vimeo.propTypes = {
  /**
     * A Vimeo video ID or URL.
     */
  video: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
     * DOM ID for the player element.
     */
  id: PropTypes.string,
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
  paused: PropTypes.bool, // eslint-disable-line react/no-unused-prop-types

  /**
     *
     */
  volume: PropTypes.number,

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
  /* eslint-disable react/no-unused-prop-types */

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

  /* eslint-enable react/no-unused-prop-types */
};

export default Vimeo;
