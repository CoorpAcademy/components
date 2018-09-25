import React from 'react';
import Animation, {LINEAR} from '../animation';
import style from './style.css';

const LateralTransitionHOC = ({children}) => (
  <Animation animated duration={2000} bezier={LINEAR}>
    {x => <div className={x === 0 ? style.start : style.end}>{children}</div>}
  </Animation>
);

export default LateralTransitionHOC;
