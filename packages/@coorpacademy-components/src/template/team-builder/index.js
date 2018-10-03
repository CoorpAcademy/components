import React from 'react';
import get from 'lodash/fp/get';
import map from 'lodash/fp/map';
import {Motion, spring} from 'react-motion';

import Button from '../../atom/button';
import Provider from '../../atom/provider';
import TeamAvatar from './teamAvatar';
import Team from './team';
import style from './style.css';
import gameStatuses from './game-statuses';

const _map = map.convert({cap: false});

const TeamBuilder = (props, context) => {
  const {skin} = context;
  const {teams, cta, title, gameStatus, myTeam} = props;

  const primary = get('racing.primary', skin);

  const button = cta ? (
    <Button
      {...cta}
      style={{
        backgroundColor: primary
      }}
    />
  ) : null;

  const Title = title ? (
    <h1
      className={style.title}
      style={{
        color: primary
      }}
    >
      {title}
    </h1>
  ) : null;

  const MotionnedMyTeam = () => (
    <Motion defaultStyle={{scale: 0}} style={{scale: spring(1)}}>
      {interpolatedStyle => {
        return (
          <div
            style={{
              minWidth: '300px',
              minHeight: '300px',
              transform: `scale(${interpolatedStyle.scale})`
            }}
          >
            {myTeam ? <Team key={myTeam.name} {...myTeam} /> : null}{' '}
          </div>
        );
      }}
    </Motion>
  );

  const MotionnedOtherTeams = ({team}) => {
    const computedWidth = 100 / teams.length;

    console.log(team);

    return (
      <Motion
        defaultStyle={{scale: 1, width: computedWidth}}
        style={{scale: team.isMyTeam ? spring(0) : 1, width: spring(0)}}
      >
        {interpolatedStyle => {
          return (
            <div
              style={{
                width: `${computedWidth}%`,
                transform: `scale(${interpolatedStyle.scale})`,
                margin: '0 10px'
              }}
            >
              {' '}
              <TeamAvatar key={team.name} {...team} />{' '}
            </div>
          );
        }}
      </Motion>
    );
  };

  return (
    <div className={style.teamBuilder}>
      {Title}
      {button}

      <MotionnedMyTeam />
      <div className={style.teams}>
        {_map((team, index) => <MotionnedOtherTeams key={index} team={team} />, teams)}
      </div>
    </div>
  );
};

TeamBuilder.contextTypes = {
  skin: Provider.childContextTypes.skin
};

export default TeamBuilder;
