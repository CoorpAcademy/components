import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M19 6h-2V2H7v4H5V0h14zM19 8h-2v2H7V8H5c-1.654 0-3 1.346-3 3v9h3v4h14v-4h3v-9c0-1.654-1.346-3-3-3zm-2 14H7v-4h10v4zm0-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
    />
  </Svg>
);

export default SvgComponent;
