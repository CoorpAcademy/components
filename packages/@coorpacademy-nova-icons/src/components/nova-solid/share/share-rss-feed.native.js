import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <G fill="currentColor">
      <Circle cx={5} cy={19.001} r={3} />
      <Path d="M3 9v2c5.514 0 10 4.484 10 10h2C15 14.383 9.617 9 3 9z" />
      <Path d="M3 3v2c8.822 0 16 7.178 16 16h2c0-9.925-8.074-18-18-18z" />
    </G>
  </Svg>
);

export default SvgComponent;
