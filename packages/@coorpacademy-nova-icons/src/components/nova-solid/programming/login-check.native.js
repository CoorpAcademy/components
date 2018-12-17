import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Circle cx={7} cy={10} r={2} />
      <Circle cx={12} cy={10} r={2} />
      <Path d="M20 5H4c-1.102 0-2 .898-2 2v6c0 1.102.897 2 2 2h8v-2H4V7h16l-.003 5H22V7c0-1.102-.896-2-2-2zM16 17.586l-2-2L12.586 17 16 20.414 21.415 15 20 13.586z" />
    </G>
  </Svg>
);

export default SvgComponent;
