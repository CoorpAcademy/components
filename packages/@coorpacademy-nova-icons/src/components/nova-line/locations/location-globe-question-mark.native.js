import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.002.002h24v24.001h-24z" />
    <G fill="currentColor">
      <Path d="M18 10h2c0-5.514-4.486-10-10-10S0 4.486 0 10s4.486 10 10 10a9.9 9.9 0 0 0 4.445-1.04l-.89-1.791A7.907 7.907 0 0 1 10 18c-4.411 0-8-3.589-8-8 0-2.021.759-3.864 2-5.274V10h2.279l2.211 6.633L14 12.5V6h-3V2.069c3.94.495 7 3.859 7 7.931zm-6-2v3.5l-2.49 1.867L7.721 8H6V3.083A7.933 7.933 0 0 1 9 2.07V8h3z" />
      <Path d="M20 12c-2.206 0-4 1.794-4 4h2c0-1.102.897-2 2-2s2 .898 2 2c0 1.103-.897 2-2 2h-1v3h2v-1.126A4.008 4.008 0 0 0 24 16c0-2.206-1.794-4-4-4z" />
      <Circle cx={20} cy={23} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
