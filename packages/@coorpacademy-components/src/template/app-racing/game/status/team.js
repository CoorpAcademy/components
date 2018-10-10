import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/fp/map';
import isNull from 'lodash/fp/isNull';
import sortBy from 'lodash/fp/sortBy';
import pipe from 'lodash/fp/pipe';
import {Motion, spring} from 'react-motion';
import classnames from 'classnames';
import animation from '../../../../atom/css-animations/fade-in.css';
import LoaderTarget from '../../../../atom/loader-target';
import ScoreNotification from './score-notification';
import style from './team.css';

const Player = ({name, avatar, isCorrect}) => {
  // eslint-disable-next-line no-nested-ternary
  const borderStyle = isNull(isCorrect)
    ? null
    : isCorrect === true ? style.correct : style.notCorrect;

  return (
    <div
      title={name}
      className={classnames(style.avatar, borderStyle, animation.fadeIn)}
      key={name}
      style={{
        backgroundImage: `url(${avatar})`
      }}
    >
      {isNull(isCorrect) ? <span className={style.status}>{'Answering...'}</span> : null}
    </div>
  );
};

const Team = props => {
  const {members} = props;
  const middleY = 80;
  // const sideY = type === 'race' ? 15 : 50;
  // const middleScreenY = 50;
  const count = {
    nbNull: 0,
    nbCorrect: 0,
    nbWrong: 0
  };

  const players = pipe(sortBy(member => !!member.isMe), sortBy(member => !member.isCorrect))(
    members
  );

  return (
    <div className={style.team}>
      {map(({name, isMe, isWaitingAnswer, avatar, isCorrect}) => {
        if (isNull(isCorrect)) {
          count.nbNull++;
        } else if (isCorrect) {
          count.nbCorrect++;
        } else {
          count.nbWrong++;
        }

        const score = !isNull(isCorrect) ? (
          <ScoreNotification
            key={`result-${name}`}
            positive={isCorrect}
            number={isCorrect ? 1 : -1}
          />
        ) : null;

        // eslint-disable-next-line no-nested-ternary
        // const position = isNull(isCorrect)
        //   ? {
        //       xPercent: 50,
        //       xOffset: isWaitingAnswer ? 25 : 25 - (count.nbNull - 1) * 15,
        //       y: isWaitingAnswer ? middleScreenY : middleY
        //     }
        //   : isCorrect === true
        //     ? {
        //         xPercent: 97,
        //         xOffset: 55 + (count.nbCorrect - 1) * 35,
        //         y: sideY
        //       }
        //     : {
        //         xPercent: 3,
        //         xOffset: -5 - (count.nbWrong - 1) * 35,
        //         y: sideY
        //       };

        // const avatarScale = isWaitingAnswer ? 2 : 1;
        const speed = isWaitingAnswer ? 5 : 1;
        const options = {stiffness: 120, damping: 16};
        // const optionsY = {stiffness: 120, damping: 13};

        return (
          <Motion
            key={name}
            defaultStyle={{xPercent: 50, xOffset: 25, y: middleY, scale: 1, loaderSpeed: 1}}
            style={{
              // xPercent: spring(position.xPercent, options),
              // xOffset: spring(position.xOffset, options),
              // y: spring(position.y, optionsY),
              // scale: spring(avatarScale, options),
              loaderSpeed: spring(speed, options)
            }}
          >
            {({loaderSpeed}) => {
              const loader = isNull(isCorrect) ? (
                <LoaderTarget
                  width="70px"
                  height="70px"
                  className={style.loader}
                  color="#FF7043"
                  strokeDasharray="35%"
                  animationDuration={`${3 / loaderSpeed}s`}
                />
              ) : null;

              return (
                <div className={style.player}>
                  {score}
                  {loader}
                  <Player name={name} avatar={avatar} isCorrect={isCorrect} />
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
  num: PropTypes.number, // eslint-disable-line react/no-unused-prop-types
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
