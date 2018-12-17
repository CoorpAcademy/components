import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M6 10.003H5v-2h1v-1c0-1.654 1.346-3 3-3s3 1.346 3 3h-2c0-.551-.449-1-1-1s-1 .449-1 1v1h2v2H8v2h4v2H8l3.612 3.612a8.831 8.831 0 0 0 1.285-.509L17 13.003l.036.037A8.963 8.963 0 0 0 18 9.003c0-4.971-4.029-9-9-9s-9 4.029-9 9a8.976 8.976 0 0 0 2.636 6.365L5 13.003v-1h1v-2z" />
      <Path d="M22 18.003v2.586l-4.293-4.292a.999.999 0 0 0-1.414 0L12 20.589l-5.293-5.292-1.414 1.413 6 6a.999.999 0 0 0 1.414 0L17 18.417l3.586 3.586H18v2h6v-6h-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
