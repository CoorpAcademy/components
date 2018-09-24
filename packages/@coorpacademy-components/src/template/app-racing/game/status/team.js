import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/fp/map';
import isNull from 'lodash/fp/isNull';
import sortBy from 'lodash/fp/sortBy';
import {Motion, spring} from 'react-motion';
import classnames from 'classnames';
import MoreIcon from '@coorpacademy/nova-icons/composition/navigation/more';
import Check from '@coorpacademy/nova-icons/composition/coorpacademy/check';
import Timer from '@coorpacademy/nova-icons/composition/coorpacademy/timer';
import animation from '../../../../atom/css-animations/fade-in.css';
import BLOCKS from '../common-fixtures/blocks';
import style from './team.css';

const TeamTitle = ({type, num}) => {
  if (type === 'race') {
    return null;
  }

  return (
    <div className={style.teamTitle}>
      <img src={BLOCKS[num]} />
      <span>Team {num}</span>
    </div>
  );
};

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
      className={classnames(style.avatar, borderStyle, animation.fadeIn)}
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
  const {members, num, type} = props;
  const middleY = type === 'race' ? 15 : 10;
  const sideY = type === 'race' ? 15 : 50;
  const count = {
    nbNull: 0,
    nbCorrect: 0,
    nbWrong: 0
  };

  const players = sortBy(member => !!member.isMe, members);

  return (
    <div
      className={style.team}
      style={{
        backgroundColor: type === 'race' ? 'rgba(5.5%, 22.7%, 23.9%, 0.2)' : 'none'
      }}
    >
      <TeamTitle type={type} num={num} />
      {map(({name, isMe, avatar, isCorrect}) => {
        if (isNull(isCorrect)) {
          count.nbNull++;
        } else if (isCorrect) {
          count.nbCorrect++;
        } else {
          count.nbWrong++;
        }

        const score = !isNull(isCorrect) ? (
          <ResponseResult key={`result-${name}`} isCorrect={isCorrect} color={num} />
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

        const options = {stiffness: 100, damping: 31};

        return (
          <Motion
            key={name}
            defaultStyle={{xPercent: 50, xOffset: 25, y: middleY}}
            style={{
              xPercent: spring(position.xPercent, options),
              xOffset: spring(position.xOffset, options),
              y: spring(position.y, options)
            }}
          >
            {({xPercent, xOffset, y}) => {
              return (
                <div
                  className={style.player}
                  style={{left: `calc(${xPercent}% - ${xOffset}px)`, top: `${y}px`}}
                >
                  {score}
                  <Player isMe={isMe} name={name} avatar={avatar} isCorrect={isCorrect} />
                </div>
              );
            }}
          </Motion>
        );
      }, players)}
    </div>
  );
};

Team.propTypes = {
  num: PropTypes.number,
  members: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      avatar: PropTypes.string,
      isCorrect: PropTypes.bool,
      isMe: PropTypes.bool
    })
  )
};

export default Team;
