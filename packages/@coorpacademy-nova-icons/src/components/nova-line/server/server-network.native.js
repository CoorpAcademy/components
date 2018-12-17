import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 0C7.527 0 3 1.374 3 4v12c0 2.43 3.877 3.785 8 3.975V22H6v2h12v-2h-5v-2.025c4.123-.189 8-1.545 8-3.975V4c0-2.626-4.527-4-9-4zm0 2c4.547 0 7 1.42 7 2s-2.453 2-7 2-7-1.42-7-2 2.453-2 7-2zm0 16c-4.547 0-7-1.42-7-2v-1.4c1.736.923 4.374 1.4 7 1.4s5.264-.478 7-1.4V16c0 .58-2.453 2-7 2zm0-4c-4.547 0-7-1.42-7-2v-1.4c1.736.923 4.374 1.4 7 1.4s5.264-.478 7-1.4V12c0 .58-2.453 2-7 2zm0-4c-4.547 0-7-1.42-7-2V6.6C6.736 7.522 9.374 8 12 8s5.264-.478 7-1.4V8c0 .58-2.453 2-7 2z" />
      <Circle cx={20} cy={23} r={1} />
      <Circle cx={4} cy={23} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
