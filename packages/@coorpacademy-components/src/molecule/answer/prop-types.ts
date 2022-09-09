import PropTypes from 'prop-types';
import VideoPlayerPropTypes from '../video-player/prop-types';

export const TYPE_IMAGE = 'img';
export const TYPE_VIDEO = 'video';
export const TYPE_AUDIO = 'audio';

const isType = (name: string) => PropTypes.oneOf([name]);

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

const propTypes = {
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
  }).isRequired,
  help: PropTypes.string,
  media: MediaViewPropTypes.media
};

type Answer = {
  title: string;
  'aria-label': string;
  onClick: Function;
  selected: boolean;
};

export type Props = {
  model: {
    answers?: Answer[];
    type: 'qcmDrag' | 'qcm' | 'qcmGraphic' | 'freeText' | 'dropDown' | 'slider' | 'template';
    onChange: (value: string) => void;
  };
  help: string;
  media: any;
};

export default propTypes;
