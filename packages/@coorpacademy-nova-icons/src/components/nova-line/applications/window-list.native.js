import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21 2H3c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h18c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 4h-8V4h8v2zM8 6V4h3v2H8zM6 4v2H3V4h3zM3 20V8h17.999l-.002 12H3z" />
      <Circle cx={6} cy={11} r={1} />
      <Path d="M9 10h10v2H9z" />
      <Circle cx={6} cy={14} r={1} />
      <Path d="M9 13h10v2H9z" />
      <Circle cx={6} cy={17} r={1} />
      <Path d="M9 16h10v2H9z" />
    </G>
  </Svg>
);

export default SvgComponent;
