import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M2 8.002V19c0 1.103.897 2 2 2h16c1.104 0 2-.897 2-2V8.002H2zm15 8.001a1 1 0 0 1-1 1h-4a2 2 0 1 1 2-2h1c0-1.654-1.346-3-3-3s-3 1.346-3 3 1.346 3 3 3h2v2h-2c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5v1zM22 7.002V5c0-1.103-.896-2-2-2H4c-1.103 0-2 .897-2 2v2.002h20zM8 4a1 1 0 1 1 0 2 1 1 0 1 1 0-2zM5 4a1 1 0 1 1 0 2 1 1 0 1 1 0-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
