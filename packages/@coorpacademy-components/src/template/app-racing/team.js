import React, {Component} from 'react';
import defer from 'lodash/fp/defer';
import getOr from 'lodash/fp/getOr';
import map from 'lodash/fp/map';
import isNull from 'lodash/fp/isNull';
import {Motion, spring} from 'react-motion';
import classnames from 'classnames';
import animation from '../../atom/css-animations/fade-in.css';
import BLOCKS from './blocks';
import style from './team.css';

const ResponseResult = ({isCorrect, color}) => {
  const textStyle = isCorrect === true ? style.textCorrect : style.textNotCorrect;

  return (
    <div className={style.responseResult}>
      <span className={classnames(style.textResult, textStyle)}>
        {`${isCorrect ? '+' : '-'} 1`}
      </span>
    </div>
  );
};

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

const Team = props => {
  const count = {
    nbNull: 0,
    nbCorrect: 0,
    nbWrong: 0
  };

  return (
    <div className={style.team}>
      <div className={style.teamTitle}>
        <img src={BLOCKS[props.num]} />
        <span>Team {props.num}</span>
      </div>
      {map(({name, avatar, isCorrect}) => {
        if (isNull(isCorrect)) {
          count.nbNull++;
        } else if (isCorrect) {
          count.nbCorrect++;
        } else {
          count.nbWrong++;
        }

        // eslint-disable-next-line no-nested-ternary
        const borderStyle = isNull(isCorrect)
          ? null
          : isCorrect === true ? style.correct : style.notCorrect;

        const score = !isNull(isCorrect) ? (
          <ResponseResult key={`result-${name}`} isCorrect={isCorrect} color={props.num} />
        ) : null;

        // eslint-disable-next-line no-nested-ternary
        const position = isNull(isCorrect)
          ? {
              percent: 50,
              offset: 25
            }
          : isCorrect === true
            ? {
                percent: 100,
                offset: 55
              }
            : {
                percent: 0,
                offset: -5
              };

        return (
          <Motion
            defaultStyle={{percent: 50, offset: 25}}
            style={{
              percent: spring(position.percent, {stiffness: 40, damping: 22}),
              offset: spring(position.offset, {stiffness: 40, damping: 22})
            }}
          >
            {({percent, offset}) => {
              return (
                <div className={style.player} style={{left: `calc(${percent}% - ${offset}px)`}}>
                  {score}
                  <Player key={name} name={name} avatar={avatar} borderStyle={borderStyle} />
                </div>
              );
            }}
          </Motion>
        );
      }, props.members)}
    </div>
  );
};

export default Team;
