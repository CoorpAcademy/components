import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Circle cx={8} cy={22} r={2} />
      <Circle cx={16} cy={22} r={2} />
      <Path d="M20 4c-.466 0-.869.321-.975.775L18.051 9H8.314c-.95.631-2.088 1-3.314 1-.333 0-.658-.034-.977-.086-.01.109-.021.22.006.329l2 8c.112.445.512.757.971.757h10c.466 0 .869-.321.975-.775L20.795 6H24V4h-4zM8.293.293L4 4.586 1.707 2.293.293 3.707 4 7.414l5.707-5.707z" />
    </G>
  </Svg>
);

export default SvgComponent;
