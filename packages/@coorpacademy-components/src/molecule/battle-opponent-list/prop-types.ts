import PropTypes from 'prop-types';

const propTypes = {
  opponents: PropTypes.arrayOf(
    PropTypes.shape({
      isAlreadyEngaged: PropTypes.bool,
      isRandom: PropTypes.bool,
      photo: PropTypes.string,
      onClick: PropTypes.func,
      displayName: PropTypes.string,
      tooltipText: PropTypes.string,
      user_id: PropTypes.string
    })
  )
};

type MoocBattleOpponent = {
  isAlreadyEngaged?: boolean;
  isRandom?: boolean;
  photo?: string;
  onClick?: () => void;
  displayName: string;
  tooltipText: string;
  user_id: string;
};

export type BattleOpponentListProps = {opponents: MoocBattleOpponent[]};

export default propTypes;
