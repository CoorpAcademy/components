import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.002h24v24h-24z" />
    <G fill="currentColor">
      <Path d="M13 3H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3h1c3.86 0 7-3.14 7-7s-3.14-7-7-7zm0 12h-2a1 1 0 0 0-1 1v3H8V5h5c2.757 0 5 2.243 5 5s-2.243 5-5 5z" />
      <Path d="M13 7h-2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2c1.654 0 3-1.346 3-3s-1.346-3-3-3zm0 4h-1V9h1c.551 0 1 .449 1 1s-.449 1-1 1z" />
    </G>
  </Svg>
);

export default SvgComponent;
