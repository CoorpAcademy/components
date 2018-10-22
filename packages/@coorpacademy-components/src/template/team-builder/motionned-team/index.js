import {Motion, spring} from 'react-motion';
import React from 'react';
import Team from '../team';
import style from './style.css';

const MotionnedMyTeam = props => {
  return (
    <Motion defaultStyle={{scale: 0}} style={{scale: spring(1)}}>
      {interpolatedStyle => {
        return (
          <div
            key={'MyTeam'}
            className={style.default}
            style={{
              transform: `scale(${interpolatedStyle.scale})`
            }}
          >
            {props.members ? <Team {...props} /> : null}
          </div>
        );
      }}
    </Motion>
  );
};

export default MotionnedMyTeam;
