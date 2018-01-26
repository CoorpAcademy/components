import React from 'react';
import classnames from 'classnames';
import map from 'lodash/fp/map';
import identity from 'lodash/fp/identity';
import Avatar, {SIZE_SMALL, SHAPE_ROUND} from '../../../../atom/avatar';
import style from './style.css';

const fakeAppTranslate = identity;

const PlayersList = props => {
  const {team, players} = props;

  return (
    <div className={style.playersList}>
      {map(player => {
        const {name, slot, image} = player;
        const disabled = !name;
        const className = classnames(
          style.playerListItem,
          disabled && style.listItemDisabled
        );

        return (
          <div key={slot} className={className}>
            <Avatar
              disabled={disabled}
              size={SIZE_SMALL}
              shape={SHAPE_ROUND}
              image={image}
              color={team.color}
            />
            <div className={style.playerName}>
              {name || fakeAppTranslate('En attente de joueur-se')}
            </div>
          </div>
        );
      }, players)}
    </div>
  );
};

export default PlayersList;
