import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 0H4C2.897 0 2 .896 2 2v2.002h20V2a2 2 0 0 0-2-2zM5 3a1 1 0 1 1 0-2 1 1 0 1 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 1 1 0 2zM2 16c0 1.103.897 2 2 2h2a6 6 0 1 1 12 0h2c1.104 0 2-.897 2-2V5.002H2V16z" />
      <Path d="M13 19.586V14h-2v5.586l-2.293-2.293-1.414 1.413L12 23.414l4.707-4.708-1.414-1.413z" />
    </G>
  </Svg>
);

export default SvgComponent;
