import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M11.383 4.081a1.002 1.002 0 0 0-1.09.217L6 9.005H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h3l4.293 4.706A1.002 1.002 0 0 0 12 21.005v-16a.998.998 0 0 0-.617-.924zM22 12.005h-3v-3h-2v3h-3v2h3v3h2v-3h3z" />
    </G>
  </Svg>
);

export default SvgComponent;
