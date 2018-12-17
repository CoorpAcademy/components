import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.002h24v24h-24z" />
    <G fill="currentColor">
      <Path d="M17 2c-1.654 0-3 1.346-3 3v9H7a1 1 0 0 0-1 1v2c0 2.757 2.243 5 5 5s5-2.243 5-5V5c0-.552.449-1 1-1h2V2h-2z" />
      <Path d="M8 9c0 .552-.449 1-1 1v2c1.654 0 3-1.346 3-3S8.654 6 7 6a1.001 1.001 0 0 1 0-2V2C5.346 2 4 3.346 4 5s1.346 3 3 3c.551 0 1 .448 1 1z" />
    </G>
  </Svg>
);

export default SvgComponent;
