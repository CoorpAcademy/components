import React from 'react';
import get from 'lodash/fp/get';
import map from 'lodash/fp/map';
import {Motion, spring} from 'react-motion';

import Button from '../../atom/button';
import Provider from '../../atom/provider';
import TeamAvatar from './teamAvatar';
import MotionnedTeam from './motionned-team';
import style from './style.css';

const _map = map.convert({cap: false});

const MotionnedOtherTeams = ({team}) => {
  const computedWidth = 100 / 4;

  return (
    <Motion defaultStyle={{scale: 1}} style={{scale: team.isMyTeam ? spring(0) : 1}}>
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

const TeamBuilder = (props, context) => {
  const {skin} = context;
  const {teams, cta, title, myTeam} = props;

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

  return (
    <div className={style.teamBuilder}>
      {Title}
      {button}
      <MotionnedTeam {...myTeam} />
      <div className={style.teams}>
        {_map((team, index) => {
          return <MotionnedOtherTeams key={`OtherTeam${index}`} team={team} />;
        }, teams)}
      </div>
    </div>
  );
};

TeamBuilder.contextTypes = {
  skin: Provider.childContextTypes.skin
};

export default TeamBuilder;
