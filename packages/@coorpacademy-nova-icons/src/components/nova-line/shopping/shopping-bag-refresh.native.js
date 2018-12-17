import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M2.92 8H4v3h2V8h6v2h2V8h1.08l.166 2h2.008l-.258-3.083A.999.999 0 0 0 16 6h-2V5c0-2.757-2.243-5-5-5S4 2.243 4 5v1H2a.999.999 0 0 0-.996.917l-1 12A.997.997 0 0 0 1 20h9v-2H2.087L2.92 8zM6 5c0-1.654 1.346-3 3-3s3 1.346 3 3v1H6V5zM18 22c-1.077 0-2.064-.44-2.811-1.189L17 19h-5v5l1.764-1.763A6.026 6.026 0 0 0 18 24c3.309 0 6-2.691 6-6h-2c0 2.206-1.795 4-4 4z" />
      <Path d="M22.239 13.761A5.936 5.936 0 0 0 18 12c-3.309 0-6 2.691-6 6h2c0-2.206 1.795-4 4-4 1.078 0 2.064.44 2.811 1.189L19 17h5v-5l-1.761 1.761z" />
    </G>
  </Svg>
);

export default SvgComponent;
