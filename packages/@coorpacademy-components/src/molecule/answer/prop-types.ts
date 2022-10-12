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

const SelectOptionsPropTypes = PropTypes.shape({
  name: PropTypes.string,
  selected: PropTypes.bool,
  validOption: PropTypes.bool,
  value: PropTypes.string
});

const AnswerPropTypes = PropTypes.shape({
  title: PropTypes.string.isRequired,
  'aria-label': PropTypes.string,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  selected: PropTypes.bool,
  image: PropTypes.string,
  options: PropTypes.arrayOf(SelectOptionsPropTypes),
  type: PropTypes.oneOf(['text', 'select']),
  name: PropTypes.string
});

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
    ]).isRequired,
    answer: PropTypes.arrayOf(AnswerPropTypes)
  }).isRequired,
  help: PropTypes.string,
  media: MediaViewPropTypes.media
};

type SelectOptions = {
  name: string;
  selected: boolean;
  validOption: boolean;
  value: string;
};

export type Answer = {
  title?: string;
  'aria-label'?: string;
  onClick?: () => void;
  onChange?: (value: string) => void;
  selected?: boolean;
  image?: string;
  options?: SelectOptions[];
  type?: 'text' | 'select';
  name?: string;
};

export type AnswerProps = {
  model: {
    type: 'qcmDrag' | 'qcm' | 'qcmGraphic' | 'freeText' | 'dropDown' | 'slider' | 'template';
    answers?: Answer[];
    template?: string;
    onChange?: (value: string | number) => void;
    onSliderChange?: (value: number) => void;
    minLabel?: string;
    maxLabel?: string;
    title?: string;
  };
  help: string;
  media?: {
    type: 'img' | 'audio' | 'video';
    url?: string;
    mediaUrl?: string;
    mimeType?: string;
    poster?: string;
    videoId?: string;
    _id?: string;
    description?: string;
    subtitles?: string[];
    posters?: string[];
    src?: string[];
    onClick?: () => void;
    onPlay?: () => void;
    onPause?: () => void;
    onResume?: () => void;
    onEnded?: () => void;
  };
};

export default propTypes;
