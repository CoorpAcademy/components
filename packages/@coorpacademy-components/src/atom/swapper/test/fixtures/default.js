import React from 'react';

const Component = props => (
  <div
    style={{
      height: '100%',
      width: '100%',
      transitionProperty: 'background-color',
      transitionTimingFunction: 'linear',
      transitionDuration: '1s',
      transitionDelay: '2s',
      ...props
    }}
  />
);

export default {
  props: {
    backgroundColor: 'red'
  },
  children: <Component backgroundColor="blue" />
};
