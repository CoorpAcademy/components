import omit from 'lodash/fp/omit';
import {BattleOpponentListProps} from '../../prop-types';
import availableOpponent from '../../../../atom/battle-opponent/test/fixtures/available-opponent';
import engagedOpponent from '../../../../atom/battle-opponent/test/fixtures/opponent-already-engaged';
import randomOpponent from '../../../../atom/battle-opponent/test/fixtures/random-opponent';

const availableOpponentProps = {
  ...omit(['userAvatarSrc'], availableOpponent.props),
  photo: availableOpponent.props.userAvatarSrc
};

const engagedOpponentProps = {
  ...omit(['userAvatarSrc'], engagedOpponent.props),
  photo: engagedOpponent.props.userAvatarSrc
};

const fixture: {props: BattleOpponentListProps} = {
  props: {
    opponents: [
      {...engagedOpponentProps, user_id: '001'},
      {...randomOpponent.props, user_id: '002'},
      {...availableOpponentProps, user_id: '003'},
      {...availableOpponentProps, user_id: '004'}
    ] as BattleOpponentListProps['opponents']
  }
};

export default fixture;
