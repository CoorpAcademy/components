import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20.348 9.633l-1.854.749A7.008 7.008 0 0 1 12 20c-3.86 0-7-3.14-7-7a7.028 7.028 0 0 1 3.5-6.064l-1.002-1.73A9.034 9.034 0 0 0 3 13c0 4.962 4.038 9 9 9s9-4.038 9-9a8.93 8.93 0 0 0-.652-3.367z" />
      <Path d="M11 2h2v10h-2z" />
      <Circle cx={17} cy={6} r={2} />
    </G>
  </Svg>
);

export default SvgComponent;
