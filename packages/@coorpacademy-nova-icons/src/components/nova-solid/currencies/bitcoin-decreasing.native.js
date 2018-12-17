import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22 18.003v2.586l-4.293-4.292a.999.999 0 0 0-1.414 0L12 20.589l-5.293-5.292-1.414 1.413 6 6a.999.999 0 0 0 1.414 0L17 18.417l3.586 3.586H18v2h6v-6h-2z" />
      <Path d="M6 5.003h2v-1h2v1.051c1.14.232 2 1.243 2 2.449 0 .566-.195 1.082-.513 1.5.318.419.513.935.513 1.5 0 1.207-.86 2.217-2 2.449v1.051H8l3.612 3.612a8.831 8.831 0 0 0 1.285-.509L17 13.003l.036.037A8.963 8.963 0 0 0 18 9.003c0-4.971-4.029-9-9-9s-9 4.029-9 9a8.976 8.976 0 0 0 2.636 6.365L6 12.003v-7z" />
      <Path d="M7 13.003l1 1v-1zM10 7.503a.5.5 0 0 0-.5-.5H8v1h1.5a.5.5 0 0 0 .5-.5zM8 11.003h1.5a.5.5 0 0 0 0-1H8v1z" />
    </G>
  </Svg>
);

export default SvgComponent;
