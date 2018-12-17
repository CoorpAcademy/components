import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M22 11h-4c0-1.654-1.346-3-3-3h-3c-.551 0-1-.449-1-1h5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5c0 1.654 1.346 3 3 3h3c.551 0 1 .449 1 1h-6a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h7v2c0 .551-.449 1-1 1h-1v-1a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1h1c1.654 0 3-1.346 3-3v-2h3a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1z"
    />
  </Svg>
);

export default SvgComponent;
