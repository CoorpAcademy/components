import React from 'react';
import {spinner, doubleBounce1, doubleBounce2} from './style.css';

const Spinner = () => {
  return (
    <div
      className={spinner}
    >

      <div
        className={doubleBounce1}
      />
      <div
        className={doubleBounce2}
      />
    </div>
  );
};

export default Spinner;
