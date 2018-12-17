import React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M17 18.999H7c-3.86 0-7-3.139-7-7 0-3.86 3.14-7 7-7h10c3.86 0 7 3.14 7 7 0 3.861-3.14 7-7 7zm-10-12c-2.757 0-5 2.243-5 5s2.243 5 5 5h10c2.757 0 5-2.243 5-5s-2.243-5-5-5H7z"
      fill="currentColor"
    />
    <Circle cx={17} cy={11.999} r={3} fill="currentColor" />
  </Svg>
);

export default SvgComponent;
