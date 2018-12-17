import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M14 11V8h1.08l.583 7h2.007l-.673-8.083A1 1 0 0 0 16 6h-2V5c0-2.757-2.243-5-5-5S4 2.243 4 5v1H2a.999.999 0 0 0-.996.917l-1 12A.998.998 0 0 0 1 20h12.001v-2H2.087L2.92 8H4v3h2V8h6v3h2zM6 6V5c0-1.654 1.346-3 3-3s3 1.346 3 3v1H6zM22.293 16.293L18 20.586l-2.293-2.293-1.414 1.414L18 23.414l5.707-5.707z" />
    </G>
  </Svg>
);

export default SvgComponent;
