import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M9 2c1.654 0 3 1.346 3 3h2c0-2.757-2.243-5-5-5S4 2.243 4 5h2c0-1.654 1.346-3 3-3zM17.571 14L17 6H1L0 20h8v-4c0-1.1.9-2 2-2h7.571z" />
      <Path d="M10 16h2v8h-2zM13 16h2v5h-2zM13 22h2v2h-2zM16 16h2v8h-2zM19 16h2v5h-2zM22 16h2v8h-2zM19 22h2v2h-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
