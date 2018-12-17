import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 3H4c-1.103 0-2 .897-2 2v2.002h20V5c0-1.103-.896-2-2-2zM5 6a1 1 0 1 1 0-2 1 1 0 1 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 1 1 0 2zM2 19c0 1.103.897 2 2 2h16c1.104 0 2-.897 2-2V8.002H2V19zm7-1.997h3.5a.5.5 0 0 0 0-1h-1a2.503 2.503 0 0 1-2.5-2.5c0-1.207.86-2.217 2-2.449v-1.051h2v1h2v2h-3.5a.5.5 0 0 0 0 1h1c1.379 0 2.5 1.122 2.5 2.5 0 1.207-.86 2.217-2 2.449v1.051h-2v-1H9v-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
