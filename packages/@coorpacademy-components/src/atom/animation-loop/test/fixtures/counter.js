import React from 'react';

const Counter = props => {
  const {frame} = props;
  return (
    <div>
      <div>DT = {frame.dt}</div>
      <div>Frame index = {frame.index}</div>
    </div>
  );
};

export default {
  props: {
    period: 1000
  },
  children: <Counter />
};
