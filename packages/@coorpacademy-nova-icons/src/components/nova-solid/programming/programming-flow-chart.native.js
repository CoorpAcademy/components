import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M2 9h14v6H2zM2 2h14v6H2zM16 16H2v6h14zM20 2v2h-3v2h3v5h-3v2h3v5h-3v2h4a1 1 0 0 0 1-1V2h-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
