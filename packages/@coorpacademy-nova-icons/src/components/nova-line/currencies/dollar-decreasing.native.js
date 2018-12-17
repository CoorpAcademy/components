import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M10 2c4.411 0 8 3.589 8 8a7.95 7.95 0 0 1-.974 3.821l1.573 1.258A9.923 9.923 0 0 0 20 10c0-5.514-4.485-10-10-10C4.486 0 0 4.486 0 10a9.95 9.95 0 0 0 2.456 6.544L3.87 15.13A7.957 7.957 0 0 1 2 10c0-4.411 3.589-8 8-8z" />
      <Path d="M22 18v2.586l-4.293-4.293a.999.999 0 0 0-1.414 0L12 20.586l-5.293-5.293-1.414 1.414 6 6a.999.999 0 0 0 1.414 0L17 18.414 20.586 22H18v2h6v-6h-2zM9.5 8H13V6h-2V5H9v1.051C7.86 6.283 7 7.293 7 8.5 7 9.878 8.122 11 9.5 11h1a.5.5 0 0 1 0 1H7v2h2v1h2v-1.051c1.14-.232 2-1.243 2-2.449 0-1.378-1.121-2.5-2.5-2.5h-1a.5.5 0 0 1 0-1z" />
    </G>
  </Svg>
);

export default SvgComponent;
