import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Circle cx={8} cy={22} r={2} />
      <Circle cx={16} cy={22} r={2} />
      <Path d="M20 3.999c-.466 0-.869.321-.975.775L18.051 9H7.314c-.102.067-.208.13-.314.19V12c0 1.1-.9 2-2 2h-.031l1.061 4.243A1 1 0 0 0 7 19h10c.466 0 .869-.321.975-.775l2.82-12.226H24v-2h-4zM6 4c0 1.102-.898 2-2 2H3v3h2V7.873A4.005 4.005 0 0 0 8 4c0-2.206-1.794-4-4-4S0 1.794 0 4h2c0-1.102.898-2 2-2s2 .898 2 2z" />
      <Circle cx={4} cy={11} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
