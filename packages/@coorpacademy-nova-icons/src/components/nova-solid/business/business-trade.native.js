import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 20H9v2h3v2l3-3-3-3zM12 .001L9 3l3 3.001v-2h3V2h-3zM13 7.001h-2v1.051c-1.14.231-2 1.242-2 2.448 0 1.379 1.121 2.5 2.5 2.5h1a.5.5 0 0 1 0 1H9v2h2v1h2v-1.05c1.14-.232 2-1.242 2-2.449 0-1.378-1.121-2.5-2.5-2.5h-1a.5.5 0 0 1 0-1H15V8h-2v-.999zM7 9.001c0-1.654-1.346-3-3-3s-3 1.346-3 3 1.346 3 3 3 3-1.346 3-3z" />
      <Path d="M4 12.001c-2.205 0-4 1.794-4 4v2a1 1 0 0 0 1 1h1v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3h1a1 1 0 0 0 1-1v-2c0-2.206-1.795-4-4-4zM23 9.001c0-1.654-1.346-3-3-3s-3 1.346-3 3 1.346 3 3 3 3-1.346 3-3z" />
      <Path d="M20 12.001c-2.205 0-4 1.794-4 4v2a1 1 0 0 0 1 1h1v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3h1a1 1 0 0 0 1-1v-2c0-2.206-1.795-4-4-4z" />
    </G>
  </Svg>
);

export default SvgComponent;
