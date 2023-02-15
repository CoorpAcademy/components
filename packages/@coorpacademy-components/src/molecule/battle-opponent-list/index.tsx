import React, {useMemo} from 'react';
import get from 'lodash/fp/get';
import map from 'lodash/fp/map';
import {v5 as uuidV5} from 'uuid';
import BattleOpponent from '../../atom/battle-opponent';
import propTypes, {BattleOpponentListProps} from './prop-types';

const BattleOpponentList = ({opponents}: BattleOpponentListProps) => {
  const opponentList = useMemo(
    () =>
      map(
        opponent => (
          <BattleOpponent
            {...opponent}
            key={uuidV5('battle-', uuidV5.URL)}
            userAvatarSrc={get('photo', opponent)}
          />
        ),
        opponents
      ),
    [opponents]
  );

  return opponentList;
};

BattleOpponentList.propTypes = propTypes;

export default BattleOpponentList;
