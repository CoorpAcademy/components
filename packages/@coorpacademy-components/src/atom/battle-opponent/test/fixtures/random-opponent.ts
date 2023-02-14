import {BattleOpponentProps} from '../../prop-types';

const fixture: {props: BattleOpponentProps} = {
  props: {
    isRandom: true,
    displayName: 'A random platypus?',
    onClick: () => console.log('Battle Opponent click, random')
  }
};

export default fixture;
