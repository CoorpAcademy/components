import React from 'react';
import map from 'lodash/fp/map';
import isNull from 'lodash/fp/isNull';
import classnames from 'classnames';
import animation from '../../atom/css-animations/fade-in.css';
import style from './team.css';

const Player = ({name, avatar, borderStyle}) => (
  <div
    title={name}
    className={classnames(style.avatar, borderStyle, animation.fadeIn)}
    key={name}
    style={{
      backgroundImage: `url(${avatar})`
    }}
  />
);

const Team = _team => (
  <div className={style.team}>
    <div className={style.answered}>
      {map(({name, avatar, isCorrect}) => {
        if (isNull(isCorrect)) {
          return null;
        }

        const borderStyle = isCorrect === true ? style.correct : style.notCorrect;

        return <Player key={name} name={name} avatar={avatar} borderStyle={borderStyle} />;
      }, _team)}
    </div>

    <div className={style.waiting}>
      {map(({name, avatar, isCorrect}) => {
        if (!isNull(isCorrect)) {
          return null;
        }

        return <Player key={name} name={name} avatar={avatar} borderStyle={style.noAnswer} />;
      }, _team)}
    </div>
  </div>
);

export default Team;
