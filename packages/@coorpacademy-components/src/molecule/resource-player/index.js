import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {omit, get} from 'lodash/fp';
import {NovaSolidVideosVideoControlPlay as Play} from '@coorpacademy/nova-icons';
import Pdf from '../pdf';
import Audio from '../audio';
import VideoPlayer from '../video-player';
import Life from '../../atom/life';
import Provider from '../../atom/provider';
import style from './style.css';

export const TYPE_IMAGE = 'img';
export const TYPE_PDF = 'pdf';
export const TYPE_VIDEO = 'video';
export const TYPE_AUDIO = 'audio';

const isType = name => PropTypes.oneOf([name]);

const videoPropType = PropTypes.shape({
  type: isType(TYPE_VIDEO).isRequired,
  description: PropTypes.string.isRequired,
  ...VideoPlayer.propTypes
});

const pdfPropType = PropTypes.shape({
  type: isType(TYPE_PDF).isRequired,
  description: PropTypes.string.isRequired,
  mediaUrl: PropTypes.string.isRequired,
  ...Pdf.propTypes
});

const audioPropType = PropTypes.shape({
  type: isType(TYPE_AUDIO).isRequired,
  description: PropTypes.string.isRequired,
  mediaUrl: PropTypes.string.isRequired,
  ...Audio.propTypes
});

const imgPropType = PropTypes.shape({
  type: isType(TYPE_IMAGE).isRequired,
  url: PropTypes.string.isRequired
});

const ResourceElement = props => {
  const {resource, autoplay = false, disableAutostart} = props;
  const {type, videoId, ...childProps} = omit('id', resource);
  const {url} = childProps;

  switch (type) {
    case TYPE_IMAGE:
      return <div className={style.img} style={{backgroundImage: `url(${url})`}} />;
    case TYPE_PDF:
      return <Pdf {...childProps} />;
    case TYPE_AUDIO:
      return <Audio {...childProps} />;
    case TYPE_VIDEO:
      return (
        <VideoPlayer
          {...omit('id', childProps)}
          autoplay={autoplay}
          disableAutostart={disableAutostart}
          id={videoId}
          height="100%"
          width="100%"
        />
      );
  }
};

ResourceElement.propTypes = {
  resource: PropTypes.oneOfType([videoPropType, pdfPropType, imgPropType, audioPropType]),
  autoplay: PropTypes.bool,
  disableAutostart: PropTypes.bool
};

const OverlayElement = (props = {}, context = undefined) => {
  const {title, text, lifeAmount, onClick} = props;
  const {skin} = context;
  const dark = get('common.dark', skin);

  return (
    <div className={style.overlay} onClick={onClick} data-name="overlay">
      <div className={style.icons}>
        <Play className={style.playButton} color={dark} />
        <Life
          count={lifeAmount}
          operator="+"
          bounce={{
            type: 'bounceTwice',
            delay: '2.5s'
          }}
          heartOnRight
        />
      </div>

      <p className={style.overlayTitle}>{title}</p>
      <p className={style.overlayText}>{text}</p>
    </div>
  );
};

OverlayElement.contextTypes = {
  skin: Provider.childContextTypes.skin
};

OverlayElement.propTypes = {
  lifeAmount: PropTypes.number,
  onClick: PropTypes.func,
  text: PropTypes.string,
  title: PropTypes.string
};

class ResourcePlayer extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    resource: PropTypes.oneOfType([videoPropType, pdfPropType, imgPropType, audioPropType]),
    overlay: PropTypes.shape({
      title: PropTypes.string,
      text: PropTypes.string,
      lifeAmount: PropTypes.number
    })
  };

  constructor(props, context) {
    super(props);
    this.state = {
      autoplay: false,
      overlay: props.overlay
    };

    this.handleOverlay = this.handleOverlay.bind(this);
  }

  handleOverlay() {
    this.setState({
      autoplay: true,
      overlay: null
    });
  }

  render() {
    const {className: customClassName, resource, overlay: propsOverlay} = this.props;
    const {overlay: stateOverlay, autoplay} = this.state;
    const {type} = resource;
    const className = classnames(
      {
        [TYPE_IMAGE]: style.image,
        [TYPE_PDF]: style.pdf,
        [TYPE_AUDIO]: style.audio,
        [TYPE_VIDEO]: style.video
      }[type],
      customClassName
    );

    const overlayView = stateOverlay ? (
      <OverlayElement {...stateOverlay} onClick={this.handleOverlay} />
    ) : null;

    return (
      <div data-name={type} className={className}>
        {overlayView}
        <ResourceElement {...this.props} disableAutostart={!!propsOverlay} autoplay={autoplay} />
      </div>
    );
  }
}

export default ResourcePlayer;
