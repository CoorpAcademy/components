import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22 7.002V5c0-1.103-.896-2-2-2H4c-1.103 0-2 .897-2 2v2.002h20zM8 4a1 1 0 1 1 0 2 1 1 0 1 1 0-2zM5 4a1 1 0 1 1 0 2 1 1 0 1 1 0-2zM2 8.002V19c0 1.103.897 2 2 2h16c1.104 0 2-.897 2-2V8.002H2zM18 19h-3v-3h-2v1h1v2h-4v-2h1v-1H9v3H6v-2h1v-2a1 1 0 0 1 1-1h3v-1h-1v-2h4v2h-1v1h3a1 1 0 0 1 1 1v2h1v2z" />
    </G>
  </Svg>
);

export default SvgComponent;
