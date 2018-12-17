import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 3.003c-4.971 0-9 4.029-9 9s4.029 9 9 9 9-4.029 9-9-4.029-9-9-9zm0 15a6 6 0 1 1 0-12 6 6 0 0 1 0 12z" />
      <Circle cx={12} cy={12.003} r={3} />
    </G>
  </Svg>
);

export default SvgComponent;
