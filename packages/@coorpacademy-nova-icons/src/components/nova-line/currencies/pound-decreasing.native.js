import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M10 2c4.411 0 8 3.589 8 8a7.95 7.95 0 0 1-.974 3.821l1.573 1.258A9.92 9.92 0 0 0 20 10c0-5.514-4.486-10-10-10S0 4.486 0 10c0 2.503.931 4.789 2.456 6.544L3.87 15.13A7.953 7.953 0 0 1 2 10c0-4.41 3.589-8 8-8z" />
      <Path d="M22 18v2.586l-4.293-4.292a.999.999 0 0 0-1.414 0L12 20.586l-5.293-5.292-1.414 1.414 6 6a1 1 0 0 0 1.414 0L17 18.415 20.586 22H18v2h6v-6h-2zM10 7c.551 0 1 .449 1 1h2c0-1.654-1.346-3-3-3S7 6.347 7 8v1H6v2h1v2H6v2h7v-2H9v-2h2V9H9V8c0-.551.449-1 1-1z" />
    </G>
  </Svg>
);

export default SvgComponent;
