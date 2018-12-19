import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 2H4c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2v1h2v-1h12v1h2v-1c1.104 0 2-.897 2-2V4c0-1.103-.896-2-2-2zm-.003 18H4V4h16l-.003 16z" />
      <Path d="M6 18a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2H5v2h1v4H5v2h1v2zm2-8h1V8H8V7h9v10H8v-1h1v-2H8v-4z" />
      <Path d="M13 15c1.654 0 3-1.346 3-3s-1.346-3-3-3-3 1.346-3 3 1.346 3 3 3zm0-4a1.001 1.001 0 0 1 0 2c-.551 0-1-.449-1-1s.449-1 1-1z" />
    </G>
  </Svg>
);

export default SvgComponent;
