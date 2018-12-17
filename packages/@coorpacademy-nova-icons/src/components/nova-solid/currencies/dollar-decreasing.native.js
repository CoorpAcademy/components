import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M7 13.003l1 1v-1z" />
      <Path d="M6 11.003h3.5a.5.5 0 0 0 0-1h-1a2.503 2.503 0 0 1-2.5-2.5c0-1.207.86-2.217 2-2.449V4.003h2v1h2v2H8.5a.5.5 0 0 0 0 1h1c1.379 0 2.5 1.122 2.5 2.5 0 1.207-.86 2.217-2 2.449v1.051H8l3.612 3.612a8.831 8.831 0 0 0 1.285-.509L17 13.003l.036.037A8.963 8.963 0 0 0 18 9.003c0-4.971-4.029-9-9-9a9 9 0 0 0-6.364 15.365L6 12.003v-1z" />
      <Path d="M22 18.003v2.586l-4.293-4.292a.999.999 0 0 0-1.414 0L12 20.589l-5.293-5.292-1.414 1.413 6 6a.999.999 0 0 0 1.414 0L17 18.417l3.586 3.586H18v2h6v-6h-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
