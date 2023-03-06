import PropTypes from 'prop-types';

const propTypes = {
  isAlreadyEngaged: PropTypes.bool,
  isRandom: PropTypes.bool,
  userAvatarSrc: PropTypes.string,
  onClick: PropTypes.func,
  displayName: PropTypes.string,
  tooltipText: PropTypes.string,
  'aria-label': PropTypes.string
};

export type TransitionProps = {
  name: string;
  children: React.ReactElement;
  className: string;
  animated: boolean;
  onAnimationEnd: () => void;
};

export default propTypes;
