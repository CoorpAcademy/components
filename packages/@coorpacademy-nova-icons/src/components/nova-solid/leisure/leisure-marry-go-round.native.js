import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24.001v24.002H0z" />
    <G fill="currentColor">
      <Path d="M13 10h3.131L12 3.803 7.87 10H11v10H2v2h20v-2h-9zM21.407 6.086L13.62 2.625 18.536 10H21a1 1 0 0 0 1-1V7a1 1 0 0 0-.593-.914zM3 10h2.465l4.916-7.375-7.787 3.461C2.233 6.246 2 6.606 2 7v2a1 1 0 0 0 1 1z" />
      <Path d="M3 15v1c0 1.767 1.232 3 2.999 3H6c1.767-.001 3-1.234 3-3v-1a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1zM15 15v1c0 1.767 1.232 3 2.999 3H18c1.767-.001 3-1.234 3-3v-1a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1z" />
    </G>
  </Svg>
);

export default SvgComponent;
