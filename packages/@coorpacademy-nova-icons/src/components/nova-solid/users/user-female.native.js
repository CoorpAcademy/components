import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Circle cx={12.001} cy={6} r={3} />
      <Path d="M16.971 17.758l-1.516-5.957C15.127 10.179 13.673 9 12.001 9c-1.672 0-3.126 1.179-3.442 2.746l-1.528 6.012c-.074.295-.009.607.175.85.185.241.469.385.773.392 0 0 .745.016 1.332.018.191.574.478 1.465.736 2.283a1 1 0 0 0 .954.699h2a1 1 0 0 0 .954-.699c.258-.818.545-1.709.737-2.283a88.59 88.59 0 0 0 1.33-.018 1 1 0 0 0 .949-1.242z" />
    </G>
  </Svg>
);

export default SvgComponent;
