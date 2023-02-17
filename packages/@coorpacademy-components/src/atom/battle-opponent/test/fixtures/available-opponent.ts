import {BattleOpponentProps} from '../../prop-types';

const fixture: {props: BattleOpponentProps} = {
  props: {
    isAlreadyEngaged: false,
    isRandom: false,
    userAvatarSrc: 'https://via.placeholder.com/150/FF7043/FAFAFA?text=Ph',
    displayName: 'Phineas Flynn',
    onClick: () => console.log('Battle Opponent click'),
    'aria-label': 'battle opponent button aria label'
  }
};

export default fixture;
