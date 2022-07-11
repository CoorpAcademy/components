import keys from 'lodash/fp/keys';
import PropTypes from 'prop-types';

export const ANIMATION_CONTROL = {
  play: 'play',
  pause: 'pause',
  stop: 'stop',
  loading: 'loading'
};

export default {
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
