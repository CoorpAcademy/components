import React from 'react';

const Chronometer = props => {
  const {animation} = props;
  const seconds = Math.floor(animation.time / 1000);
  const milliseconds = animation.time - seconds * 1000;

  return (
    <div>
      <div>{`${seconds}'${milliseconds}`}</div>
    </div>
  );
};

export default {
  children: <Chronometer />
};
