import React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <Circle cx={12} cy={12.001} r={1.25} fill="currentColor" />
    <Circle cx={8.5} cy={12.001} r={1.25} fill="currentColor" />
    <Circle cx={15.5} cy={12.001} r={1.25} fill="currentColor" />
    <Path
      fill="currentColor"
      d="M6.293 16.708l-4.707-4.707 4.707-4.707 1.414 1.414-3.293 3.293 3.293 3.293zM17.707 16.708l-1.414-1.414 3.293-3.293-3.293-3.293 1.414-1.414 4.707 4.707z"
    />
  </Svg>
);

export default SvgComponent;
