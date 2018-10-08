import {Motion, spring} from 'react-motion';
import React from 'react';
import Team from '../team';

const MotionnedMyTeam = props => (
  <Motion defaultStyle={{scale: 0}} style={{scale: spring(1)}}>
    {interpolatedStyle => {
      return (
        <div
          key={'MyTeam'}
          style={{
            minWidth: '300px',
            minHeight: '300px',
            transform: `scale(${interpolatedStyle.scale})`
          }}
        >
          {props ? <Team {...props} /> : null}{' '}
        </div>
      );
    }}
  </Motion>
);

export default MotionnedMyTeam;
