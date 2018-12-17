import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M14 5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2h4zM14 6h-4v1.607c-.633.715-2 2.48-2 4.393v9a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-9c0-1.913-1.367-3.678-2-4.393V6z" />
    </G>
  </Svg>
);

export default SvgComponent;
