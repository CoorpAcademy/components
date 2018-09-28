import React from 'react';
import get from 'lodash/fp/get';
import map from 'lodash/fp/map';
import Button from '../../atom/button';
import Provider from '../../atom/provider';
import Team from './team';
import style from './style.css';

const _map = map.convert({cap: false});

const TeamBuilder = (props, context) => {
  const {skin} = context;
  const {teams, cta, title} = props;
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
      <div className={style.teams}>
        {_map((team, index) => <Team num={index} key={team.name} {...team} />, teams)}
      </div>
    </div>
  );
};

TeamBuilder.contextTypes = {
  skin: Provider.childContextTypes.skin
};

export default TeamBuilder;
