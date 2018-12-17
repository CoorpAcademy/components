import React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <Path
      d="M8 13.09c-2.467-1.856-6-5.155-6-8.089 0-1.654 1.346-3 3-3 1.689 0 3 1.613 3 3a1 1 0 1 0 2 0c0-1.387 1.311-3 3-3 1.654 0 3 1.346 3 3 0 .982-.402 2.004-1.021 3h2.278c.46-.969.743-1.979.743-3 0-2.757-2.243-5-5-5-1.594 0-3.07.837-4 2.08C8.07.838 6.594.001 5 .001c-2.757 0-5 2.243-5 5 0 4.8 6.205 9.33 8 10.541V13.09z"
      fill="currentColor"
    />
    <Path
      d="M17 24.001c-3.859 0-7-3.14-7-7 0-3.859 3.141-7 7-7s7 3.141 7 7c0 3.86-3.141 7-7 7zm0-12c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
      fill="currentColor"
    />
    <Path fill="currentColor" d="M16 17.001h2v4h-2z" />
    <Circle cx={17} cy={15.001} r={1} fill="currentColor" />
  </Svg>
);

export default SvgComponent;
