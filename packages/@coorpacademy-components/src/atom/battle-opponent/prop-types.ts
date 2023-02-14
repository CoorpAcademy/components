import PropTypes from 'prop-types';

const propTypes = {
  isAlreadyEngaged: PropTypes.bool,
  isRandom: PropTypes.bool,
  userAvatarSrc: PropTypes.string,
  onClick: PropTypes.func,
  displayName: PropTypes.string,
  tooltipText: PropTypes.string
};

export type BattleOpponentProps = {
  isAlreadyEngaged?: boolean;
  isRandom?: boolean;
  userAvatarSrc?: string;
  onClick?: () => void;
  displayName: string;
  tooltipText?: string;
};

export default propTypes;
