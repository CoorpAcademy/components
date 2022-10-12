import keys from 'lodash/fp/keys';
import PropTypes from 'prop-types';

export type LottieAnimationProps = {
  'aria-label': string;
  'data-name'?: string;
  animationSrc: string;
  loop?: boolean;
  rendererSettings?: {
    hideOnTransparent?: boolean;
    className?: string;
  };
  height?: number;
  width?: number;
  className?: string;
  ie11ImageBackup: string;
  backupImageClassName?: string;
  autoplay?: boolean;
  animationControl?: 'play' | 'pause' | 'stop' | 'loading';
};

export const ANIMATION_CONTROL = {
  play: 'play',
  pause: 'pause',
  stop: 'stop',
  loading: 'loading'
};

const propTypes = {
  'aria-label': PropTypes.string.isRequired,
  'data-name': PropTypes.string,
  animationSrc: PropTypes.string.isRequired,
  loop: PropTypes.bool,
  rendererSettings: PropTypes.shape({
    hideOnTransparent: PropTypes.bool,
    className: PropTypes.string
  }),
  height: PropTypes.number,
  width: PropTypes.number,
  className: PropTypes.string,
  ie11ImageBackup: PropTypes.string.isRequired,
  backupImageClassName: PropTypes.string,
  autoplay: PropTypes.bool,
  animationControl: PropTypes.oneOf(keys(ANIMATION_CONTROL))
};

export default propTypes;
