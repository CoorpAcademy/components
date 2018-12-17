import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M17 8.051V7h-2v1h-2v8h2v1h2v-1.05c1.14-.233 2-1.243 2-2.45 0-.565-.195-1.081-.513-1.5.318-.418.513-.934.513-1.5 0-1.207-.86-2.217-2-2.449zm0 2.449a.5.5 0 0 1-.5.5H15v-1h1.5a.5.5 0 0 1 .5.5zm-.5 3.5H15v-1h1.5a.5.5 0 0 1 0 1z" />
      <Path d="M16 4a8 8 0 0 0-7.271 4.676A5.9 5.9 0 0 0 6 8c-3.309 0-6 2.692-6 6 0 3.309 2.691 6 6 6h10c4.411 0 8-3.589 8-8 0-4.41-3.589-8-8-8zm0 14H6c-2.206 0-4-1.794-4-4s1.794-4 4-4c1.194 0 2.066.532 2.586.978a1.002 1.002 0 0 0 1.618-.505A6 6 0 0 1 16 6c3.309 0 6 2.692 6 6 0 3.31-2.691 6-6 6z" />
    </G>
  </Svg>
);

export default SvgComponent;
