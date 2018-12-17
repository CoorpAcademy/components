import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20.001 6v12h-16V6h16m0-2h-16c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z" />
      <Path d="M14.001 11h4v2h-4zM14.001 14h4v2h-4zM6.001 16c0-1.841 1.159-3 3-3s3 1.159 3 3h-6z" />
      <Circle cx={9.001} cy={10} r={2} />
    </G>
  </Svg>
);

export default SvgComponent;
