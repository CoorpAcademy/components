import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M2 7h2v8H2zM20 3v1.197L5 7.531V18c0 .459.312.858.758.971l4 1A1 1 0 0 0 10.8 19.6l2.47-3.293L20 17.801V19h2V3h-2zM9.598 17.869L7 17.219v-2.307l4.127.918-1.529 2.039z" />
    </G>
  </Svg>
);

export default SvgComponent;
