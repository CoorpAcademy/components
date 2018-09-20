import React from 'react';
import map from 'lodash/fp/map';
import isNull from 'lodash/fp/isNull';
import sortBy from 'lodash/fp/sortBy';
import {Motion, spring} from 'react-motion';
import classnames from 'classnames';
import MoreIcon from '@coorpacademy/nova-icons/composition/navigation/more';
import Check from '@coorpacademy/nova-icons/composition/coorpacademy/check';
import Timer from '@coorpacademy/nova-icons/composition/coorpacademy/timer';
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

const Player = ({name, isMe, avatar, isCorrect}) => {
  // eslint-disable-next-line no-nested-ternary
  const borderStyle = isNull(isCorrect)
    ? null
    : isCorrect === true ? style.correct : style.notCorrect;

  // eslint-disable-next-line no-nested-ternary
  const icon = isNull(isCorrect) ? (
    <Timer className={style.iconWait} color="#FF7043" />
  ) : isCorrect === true ? (
    <Check className={style.iconCorrect} color="#3EC483" />
  ) : (
    <MoreIcon className={style.iconWrong} color="#F73F52" />
  );

  return (
    <div
      title={name}
      className={classnames(isMe ? style.myAvatar : style.avatar, borderStyle, animation.fadeIn)}
      key={name}
      style={{
        backgroundImage: `url(${avatar})`
      }}
    >
      {icon}
      {isMe && <span className={style.textMe}>me</span>}
    </div>
  );
};

const Team = props => {
  const middleY = 10;
  const sideY = 50;
  const count = {
    nbNull: 0,
    nbCorrect: 0,
    nbWrong: 0
  };

  const players = sortBy(member => !!member.isMe, props.members);

  return (
    <div className={style.team}>
      <div className={style.teamTitle}>
        <img src={BLOCKS[props.num]} />
        <span>Team {props.num}</span>
      </div>
      {map(({name, isMe, avatar, isCorrect}) => {
        if (isNull(isCorrect)) {
          count.nbNull++;
        } else if (isCorrect) {
          count.nbCorrect++;
        } else {
          count.nbWrong++;
        }

        const score = !isNull(isCorrect) ? (
          <ResponseResult key={`result-${name}`} isCorrect={isCorrect} color={props.num} />
        ) : null;

        // eslint-disable-next-line no-nested-ternary
        const position = isNull(isCorrect)
          ? {
              xPercent: 50,
              xOffset: 25 - (count.nbNull - 1) * 15,
              y: middleY
            }
          : isCorrect === true
            ? {
                xPercent: 100,
                xOffset: 55 + (count.nbCorrect - 1) * 35,
                y: sideY
              }
            : {
                xPercent: 0,
                xOffset: -5 - (count.nbWrong - 1) * 35,
                y: sideY
              };

        return (
          <Motion
            defaultStyle={{xPercent: 50, xOffset: 25, y: middleY}}
            style={{
              xPercent: spring(position.xPercent, {stiffness: 40, damping: 22}),
              xOffset: spring(position.xOffset, {stiffness: 40, damping: 22}),
              y: spring(position.y, {stiffness: 40, damping: 22})
            }}
          >
            {({xPercent, xOffset, y}) => {
              return (
                <div
                  className={style.player}
                  style={{left: `calc(${xPercent}% - ${xOffset}px)`, top: `${y}px`}}
                >
                  {score}
                  <Player
                    key={name}
                    isMe={isMe}
                    name={name}
                    avatar={avatar}
                    isCorrect={isCorrect}
                  />
                </div>
              );
            }}
          </Motion>
        );
      }, players)}
    </div>
  );
};

export default Team;
