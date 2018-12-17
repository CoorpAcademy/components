import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.002-.002h24.001v24.001H-.002z" />
    <G fill="currentColor">
      <Path d="M18 3.001v2a1.001 1.001 0 0 1-2 0c0-1.654-1.346-3-3-3s-3 1.346-3 3v2H9a1 1 0 0 0-1 1v.682A7.01 7.01 0 0 0 4 15c0 3.86 3.141 7 7 7s7-3.14 7-7a7.01 7.01 0 0 0-4-6.317v-.682a1 1 0 0 0-1-1h-1v-2a1.001 1.001 0 0 1 2 0c0 1.654 1.346 3 3 3s3-1.346 3-3v-2h-2zm-5.334 7.291A5.008 5.008 0 0 1 16 15c0 2.757-2.243 5-5 5s-5-2.243-5-5a5.008 5.008 0 0 1 3.334-4.708A1 1 0 0 0 10 9.35v-.349h2v.349a1 1 0 0 0 .666.942z" />
      <Path d="M7 15h2c0-1.102.896-2 2-2v-2c-2.205 0-4 1.794-4 4z" />
    </G>
  </Svg>
);

export default SvgComponent;
