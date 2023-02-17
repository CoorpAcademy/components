import {BattleOpponentProps} from '../../prop-types';

const fixture: {props: BattleOpponentProps} = {
  props: {
    isRandom: true,
    displayName: 'A random platypus?',
    onClick: () => console.log('Battle Opponent click, random'),
    'aria-label': 'battle opponent button aria label'
  }
};

export default fixture;
