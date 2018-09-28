import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/fp/map';
import isNull from 'lodash/fp/isNull';
import sortBy from 'lodash/fp/sortBy';
import {Motion, spring} from 'react-motion';
import classnames from 'classnames';
import MoreIcon from '@coorpacademy/nova-icons/composition/navigation/more';
import Check from '@coorpacademy/nova-icons/composition/coorpacademy/check';
import animation from '../../../../atom/css-animations/fade-in.css';
import LoaderTarget from '../../../../atom/loader-target';
import ScoreNotification from './score-notification';
import style from './team.css';

const Player = ({name, isMe, avatar, isCorrect}) => {
  // eslint-disable-next-line no-nested-ternary
  const borderStyle = isNull(isCorrect)
    ? null
    : isCorrect === true ? style.correct : style.notCorrect;

  // eslint-disable-next-line no-nested-ternary
  const icon = isNull(isCorrect) ? null : isCorrect === true ? (
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
  const {members, type, popUpMaxHeight} = props;
  const middleY = type === 'race' ? 15 : 10;
  const sideY = type === 'race' ? 15 : 50;
  const middleScreenY = -popUpMaxHeight * 0.45;
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
      {map(({name, isMe, isWaitingAnswer, avatar, isCorrect}) => {
        if (isNull(isCorrect)) {
          count.nbNull++;
        } else if (isCorrect) {
          count.nbCorrect++;
        } else {
          count.nbWrong++;
        }

        const score = !isNull(isCorrect) ? (
          <ScoreNotification key={`result-${name}`} positive={isCorrect} number={1} />
        ) : null;

        // eslint-disable-next-line no-nested-ternary
        const position = isNull(isCorrect)
          ? {
              xPercent: 50,
              xOffset: isWaitingAnswer ? 25 : 25 - (count.nbNull - 1) * 15,
              y: isWaitingAnswer ? middleScreenY : middleY
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

        const avatarScale = isWaitingAnswer ? 2 : 1;
        const speed = isWaitingAnswer ? 5 : 1;
        const options = {stiffness: 120, damping: 30};

        return (
          <Motion
            key={name}
            defaultStyle={{xPercent: 50, xOffset: 25, y: middleY, scale: 1, loaderSpeed: 1}}
            style={{
              xPercent: spring(position.xPercent, options),
              xOffset: spring(position.xOffset, options),
              y: spring(position.y, options),
              scale: spring(avatarScale, options),
              loaderSpeed: spring(speed, options)
            }}
          >
            {({xPercent, xOffset, y, scale, loaderSpeed}) => {
              const loader = isNull(isCorrect) ? (
                <LoaderTarget
                  width="56px"
                  height="56px"
                  className={style.loader}
                  color="#FF7043"
                  strokeDasharray="18 35"
                  animationDuration={`${3.5 / loaderSpeed}s`}
                />
              ) : null;

              return (
                <div
                  className={style.player}
                  style={{
                    left: `calc(${xPercent}% - ${xOffset}px)`,
                    top: `${y}px`,
                    transform: `scale(${scale})`
                  }}
                >
                  {score}
                  {loader}
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
