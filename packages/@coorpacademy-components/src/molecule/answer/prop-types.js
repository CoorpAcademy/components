import PropTypes from 'prop-types';
import VideoPlayerPropTypes from '../video-player/prop-types';

export const TYPE_IMAGE = 'img';
export const TYPE_VIDEO = 'video';
export const TYPE_AUDIO = 'audio';

const isType = name => PropTypes.oneOf([name]);

const videoPropType = PropTypes.shape({
  ...VideoPlayerPropTypes,
  type: isType(TYPE_VIDEO).isRequired
});

const imgPropType = PropTypes.shape({
  type: isType(TYPE_IMAGE).isRequired,
  url: PropTypes.string.isRequired
});

const audioPropType = PropTypes.shape({
  type: isType(TYPE_AUDIO).isRequired,
  mediaUrl: PropTypes.string.isRequired
});

export const MediaViewPropTypes = {
  media: PropTypes.oneOfType([videoPropType, imgPropType, audioPropType])
};

export default {
  model: PropTypes.shape({
    type: PropTypes.oneOf([
      'qcmDrag',
      'qcm',
      'qcmGraphic',
      'freeText',
      'dropDown',
      'slider',
      'template'
    ]).isRequired
  }),
  help: PropTypes.string,
  media: MediaViewPropTypes.media
};
