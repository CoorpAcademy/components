import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.002h24V24H0z" />
    <G fill="currentColor">
      <Path d="M23.707 10.293l-5-5A.997.997 0 0 0 18 5H8a1 1 0 0 0-1 1v4.152l-5.165.861A1.002 1.002 0 0 0 1 12v5a1 1 0 0 0 1 1h2c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3c-.883 0-1.67.391-2.22 1H3v-3.152L8.083 12H22v4h-.78A2.981 2.981 0 0 0 19 15c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3h1a1 1 0 0 0 1-1v-6a.996.996 0 0 0-.293-.707zM7 17c.551 0 1 .449 1 1s-.449 1-1 1-1-.449-1-1 .449-1 1-1zm12 2c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1zm1.586-9H16V7h1.586l3 3zM14 7v3H9V7h5z" />
      <Path d="M11 16h4v2h-4z" />
    </G>
  </Svg>
);

export default SvgComponent;
