import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <G fill="currentColor">
      <Circle cx={12} cy={12.002} r={1.25} />
      <Circle cx={8.5} cy={12.002} r={1.25} />
      <Circle cx={15.5} cy={12.002} r={1.25} />
      <Path d="M6.293 16.708l-4.707-4.706 4.707-4.708 1.414 1.414-3.293 3.294 3.293 3.293zM17.707 16.708l-1.414-1.413 3.293-3.293-3.293-3.294 1.414-1.414 4.707 4.708z" />
    </G>
  </Svg>
);

export default SvgComponent;
