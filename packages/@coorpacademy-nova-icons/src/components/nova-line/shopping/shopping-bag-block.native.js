import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M2.92 8H4v3h2V8h6v2h2V8h1.08l.166 2h2.008l-.258-3.083A.999.999 0 0 0 16 6h-2V5c0-2.757-2.243-5-5-5S4 2.243 4 5v1H2a.999.999 0 0 0-.996.917l-1 12A.997.997 0 0 0 1 20h9v-2H2.087L2.92 8zM6 5c0-1.654 1.346-3 3-3s3 1.346 3 3v1H6V5z" />
      <Path d="M18 12c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm0 2c.74 0 1.424.215 2.02.567l-5.453 5.452A3.947 3.947 0 0 1 14 18c0-2.206 1.795-4 4-4zm0 8c-.74 0-1.424-.215-2.02-.567l5.453-5.452A3.95 3.95 0 0 1 22 18c0 2.206-1.795 4-4 4z" />
    </G>
  </Svg>
);

export default SvgComponent;
