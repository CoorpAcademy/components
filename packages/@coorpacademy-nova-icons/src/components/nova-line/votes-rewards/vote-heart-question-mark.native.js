import React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M9 16a.998.998 0 0 1-.529-.152C8.124 15.632 0 10.491 0 5c0-2.757 2.243-5 5-5 1.594 0 3.07.837 4 2.08C9.93.837 11.406 0 13 0c2.757 0 5 2.243 5 5 0 5.491-8.124 10.632-8.471 10.848A.998.998 0 0 1 9 16zM5 2C3.346 2 2 3.346 2 5c0 3.363 4.643 7.207 7 8.806 2.357-1.599 7-5.442 7-8.806 0-1.654-1.346-3-3-3-1.689 0-3 1.613-3 3a1 1 0 1 1-2 0c0-1.387-1.311-3-3-3zM21 21h-2v-3h1a2 2 0 1 0-2-2h-2c0-2.205 1.795-4 4-4s4 1.795 4 4a4.01 4.01 0 0 1-3 3.874V21z"
      fill="currentColor"
    />
    <Circle cx={20} cy={23} r={1} fill="currentColor" />
  </Svg>
);

export default SvgComponent;
