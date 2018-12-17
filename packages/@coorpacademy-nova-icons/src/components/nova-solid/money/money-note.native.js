import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21 4H1v14h20V4zM8 16l-5-5V6h11l5 5v5H8z" />
      <Circle cx={11} cy={11} r={3} />
      <Path d="M22 8v11H5v2h19V8z" />
    </G>
  </Svg>
);

export default SvgComponent;
