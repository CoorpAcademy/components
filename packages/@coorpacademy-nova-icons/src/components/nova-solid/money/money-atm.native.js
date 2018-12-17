import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M0 3v8h4V9H2V5h20v4h-2v2h4V3z" />
      <Path d="M13 6l4 4v9h-5l-5-5V6H5v15h14V6z" />
      <Circle cx={12} cy={12} r={3} />
    </G>
  </Svg>
);

export default SvgComponent;
