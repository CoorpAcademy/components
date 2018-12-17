import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M16.997 6.917A1 1 0 0 0 16 6h-2V5c0-2.757-2.243-5-5-5S4 2.243 4 5v1H2a.999.999 0 0 0-.996.917l-1 12A.998.998 0 0 0 1 20h14v-2H2.087L2.92 8H4v3h2V8h6v3h2V8h1.08l.75 9h2.007l-.84-10.083zM12 6H6V5c0-1.654 1.346-3 3-3s3 1.346 3 3v1zM17 19h6v2h-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
